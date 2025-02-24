# Copyright 2017 Camptocamp SA
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl.html)

import mock

from odoo import api
from odoo.modules.registry import Registry
from odoo.tests import common

from odoo.addons.component.core import WorkContext
from odoo.addons.component.tests.common import TransactionComponentCase
from odoo.addons.connector.database import pg_try_advisory_lock
from odoo.addons.queue_job.exception import RetryableJobError


class TestAdvisoryLock(TransactionComponentCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        cls.env = cls.env(
            context=dict(
                cls.env.context,
                mail_create_nolog=True,
                mail_create_nosubscribe=True,
                mail_notrack=True,
                no_reset_password=True,
                tracking_disable=True,
            )
        )
        cls.registry2 = Registry(common.get_db_name())
        cls.cr2 = cls.registry2.cursor()
        cls.env2 = api.Environment(cls.cr2, cls.env.uid, {})

        @cls.addClassCleanup
        def reset_cr2():
            # rollback and close the cursor, and reset the environments
            cls.env2.reset()
            cls.cr2.rollback()
            cls.cr2.close()

    def test_concurrent_lock(self):
        """2 concurrent transactions cannot acquire the same lock"""
        # the lock is based on a string, a second transaction trying
        # to acquire the same lock won't be able to acquire it
        lock = "import_record({}, {}, {}, {})".format(
            "backend.name", 1, "res.partner", "999999"
        )
        acquired = pg_try_advisory_lock(self.env, lock)
        self.assertTrue(acquired)
        # we test the base function
        inner_acquired = pg_try_advisory_lock(self.env2, lock)
        self.assertFalse(inner_acquired)

    def test_concurrent_import_lock(self):
        """A 2nd concurrent transaction must retry"""
        # the lock is based on a string, a second transaction trying
        # to acquire the same lock won't be able to acquire it
        lock = "import_record({}, {}, {}, {})".format(
            "backend.name", 1, "res.partner", "999999"
        )

        backend = mock.MagicMock()
        backend.env = self.env
        work = WorkContext(model_name="res.partner", collection=backend)
        # we test the function through a Component instance
        component = work.component_by_name("base.connector")
        # acquire the lock
        component.advisory_lock_or_retry(lock)

        # instanciate another component using a different odoo env
        # hence another PG transaction
        backend2 = mock.MagicMock()
        backend2.env = self.env2
        work2 = WorkContext(model_name="res.partner", collection=backend2)
        component2 = work2.component_by_name("base.connector")
        with self.assertRaises(RetryableJobError) as cm:
            component2.advisory_lock_or_retry(lock, retry_seconds=3)
            self.assertEqual(cm.exception.seconds, 3)
