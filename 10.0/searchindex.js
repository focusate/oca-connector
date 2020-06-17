Search.setIndex({docnames:["api/api_backend","api/api_channels","api/api_components","api/api_event","api/api_exception","api/api_queue","guides/bootstrap_connector","guides/code_overview","guides/concepts","guides/jobrunner","guides/migration_guide","index","project/changes","project/contribute","project/contributors","project/license","project/roadmap"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:54},filenames:["api/api_backend.rst","api/api_channels.rst","api/api_components.rst","api/api_event.rst","api/api_exception.rst","api/api_queue.rst","guides/bootstrap_connector.rst","guides/code_overview.rst","guides/concepts.rst","guides/jobrunner.rst","guides/migration_guide.rst","index.rst","project/changes.rst","project/contribute.rst","project/contributors.rst","project/license.rst","project/roadmap.rst"],objects:{"connector.backend_model":{ConnectorBackend:[0,0,1,""],ExternalBinding:[0,0,1,""]},"connector.backend_model.ConnectorBackend":{get_backend:[0,1,1,""],name:[0,2,1,""],version:[0,2,1,""]},"connector.components":{backend_adapter:[2,3,0,"-"],binder:[2,3,0,"-"],core:[2,3,0,"-"],listener:[2,3,0,"-"],mapper:[2,3,0,"-"],synchronizer:[2,3,0,"-"]},"connector.components.backend_adapter":{BackendAdapter:[2,0,1,""],CRUDAdapter:[2,0,1,""]},"connector.components.backend_adapter.BackendAdapter":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.backend_adapter.CRUDAdapter":{"delete":[2,1,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],create:[2,1,1,""],read:[2,1,1,""],search:[2,1,1,""],search_read:[2,1,1,""],write:[2,1,1,""]},"connector.components.binder":{Binder:[2,0,1,""]},"connector.components.binder.Binder":{_backend_field:[2,2,1,""],_external_field:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_odoo_field:[2,2,1,""],_sync_date_field:[2,2,1,""],_usage:[2,2,1,""],bind:[2,1,1,""],to_external:[2,1,1,""],to_internal:[2,1,1,""],unwrap_binding:[2,1,1,""],unwrap_model:[2,1,1,""]},"connector.components.core":{BaseConnectorComponent:[2,0,1,""]},"connector.components.core.BaseConnectorComponent":{_name:[2,2,1,""],advisory_lock_or_retry:[2,1,1,""],backend_record:[2,2,1,""],binder_for:[2,1,1,""]},"connector.components.listener":{ConnectorListener:[2,0,1,""]},"connector.components.listener.ConnectorListener":{_inherit:[2,2,1,""],_name:[2,2,1,""],no_connector_export:[2,1,1,""]},"connector.components.mapper":{ExportMapChild:[2,0,1,""],ExportMapper:[2,0,1,""],ImportMapChild:[2,0,1,""],ImportMapper:[2,0,1,""],MapChild:[2,0,1,""],MapRecord:[2,0,1,""],Mapper:[2,0,1,""],changed_by:[2,4,1,""],convert:[2,4,1,""],external_to_m2o:[2,4,1,""],follow_m2o_relations:[2,4,1,""],m2o_to_external:[2,4,1,""],mapping:[2,4,1,""],none:[2,4,1,""],only_create:[2,4,1,""]},"connector.components.mapper.ExportMapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.ExportMapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.ImportMapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],format_items:[2,1,1,""]},"connector.components.mapper.ImportMapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.mapper.MapChild":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],format_items:[2,1,1,""],get_item_values:[2,1,1,""],get_items:[2,1,1,""],skip_item:[2,1,1,""]},"connector.components.mapper.MapRecord":{parent:[2,2,1,""],source:[2,2,1,""],update:[2,1,1,""],values:[2,1,1,""]},"connector.components.mapper.Mapper":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""],changed_by_fields:[2,1,1,""],finalize:[2,1,1,""],map_methods:[2,2,1,""],map_record:[2,1,1,""],options:[2,2,1,""]},"connector.components.synchronizer":{Deleter:[2,0,1,""],Exporter:[2,0,1,""],GenericExporter:[2,0,1,""],Importer:[2,0,1,""],Synchronizer:[2,0,1,""]},"connector.components.synchronizer.Deleter":{_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.Exporter":{_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.GenericExporter":{_after_export:[2,1,1,""],_create:[2,1,1,""],_create_data:[2,1,1,""],_default_binding_field:[2,2,1,""],_delay_import:[2,1,1,""],_export_dependencies:[2,1,1,""],_export_dependency:[2,1,1,""],_has_to_skip:[2,1,1,""],_inherit:[2,2,1,""],_lock:[2,1,1,""],_map_data:[2,1,1,""],_name:[2,2,1,""],_retry_unique_violation:[2,1,1,""],_run:[2,1,1,""],_should_import:[2,1,1,""],_update:[2,1,1,""],_update_data:[2,1,1,""],_validate_create_data:[2,1,1,""],_validate_update_data:[2,1,1,""],run:[2,1,1,""]},"connector.components.synchronizer.Importer":{_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],_usage:[2,2,1,""]},"connector.components.synchronizer.Synchronizer":{_base_backend_adapter_usage:[2,2,1,""],_base_mapper_usage:[2,2,1,""],_inherit:[2,2,1,""],_name:[2,2,1,""],backend_adapter:[2,2,1,""],binder:[2,2,1,""],mapper:[2,2,1,""],run:[2,1,1,""]},"connector.exception":{ConnectorException:[4,5,1,""],IDMissingInBackend:[4,5,1,""],InvalidDataError:[4,5,1,""],ManyIDSInBackend:[4,5,1,""],MappingError:[4,5,1,""],NetworkRetryableError:[4,5,1,""],NoConnectorUnitError:[4,5,1,""],NoExternalId:[4,5,1,""]},"odoo.addons.component":{builder:[2,3,0,"-"],core:[2,3,0,"-"],exception:[2,3,0,"-"]},"odoo.addons.component.builder":{ComponentBuilder:[2,0,1,""]},"odoo.addons.component.builder.ComponentBuilder":{build_registry:[2,1,1,""],load_components:[2,1,1,""]},"odoo.addons.component.core":{AbstractComponent:[2,0,1,""],Component:[2,0,1,""],ComponentDatabases:[2,0,1,""],ComponentRegistry:[2,0,1,""],MetaComponent:[2,0,1,""],WorkContext:[2,0,1,""]},"odoo.addons.component.core.AbstractComponent":{collection:[2,2,1,""],component:[2,1,1,""],component_by_name:[2,1,1,""],env:[2,2,1,""],many_components:[2,1,1,""],model:[2,2,1,""]},"odoo.addons.component.core.ComponentRegistry":{get:[2,1,1,""],load_components:[2,1,1,""],lookup:[2,1,1,""]},"odoo.addons.component.core.MetaComponent":{apply_on_models:[2,2,1,""]},"odoo.addons.component.core.WorkContext":{collection:[2,2,1,""],component:[2,1,1,""],component_by_name:[2,1,1,""],env:[2,2,1,""],many_components:[2,1,1,""],model:[2,2,1,""],model_name:[2,2,1,""],work_on:[2,1,1,""]},"odoo.addons.component.exception":{ComponentException:[2,5,1,""],NoComponentError:[2,5,1,""],SeveralComponentError:[2,5,1,""]},"odoo.addons.component.models":{collection:[2,3,0,"-"]},"odoo.addons.component.models.collection":{Collection:[2,0,1,""]},"odoo.addons.component.models.collection.Collection":{work_on:[2,1,1,""]},"odoo.addons.component_event.components":{event:[3,3,0,"-"]},"odoo.addons.component_event.components.event":{skip_if:[3,4,1,""]},"odoo.addons.component_event.models":{base:[3,3,0,"-"]},"odoo.addons.component_event.models.base":{Base:[3,0,1,""]},"odoo.addons.queue_job":{job:[5,3,0,"-"]},"odoo.addons.queue_job.job":{DelayableRecordset:[5,0,1,""],Job:[5,0,1,""],job:[5,4,1,""],related_action:[5,4,1,""]},"odoo.addons.queue_job.job.Job":{args:[5,2,1,""],date_created:[5,2,1,""],date_done:[5,2,1,""],date_enqueued:[5,2,1,""],date_started:[5,2,1,""],db_record:[5,1,1,""],db_record_from_uuid:[5,6,1,""],description:[5,2,1,""],enqueue:[5,7,1,""],eta:[5,2,1,""],exc_info:[5,2,1,""],func:[5,2,1,""],identity_key:[5,2,1,""],job_record_with_same_identity_key:[5,1,1,""],kwargs:[5,2,1,""],load:[5,7,1,""],max_retries:[5,2,1,""],model_name:[5,2,1,""],perform:[5,1,1,""],postpone:[5,1,1,""],priority:[5,2,1,""],recordset:[5,2,1,""],related_action:[5,1,1,""],result:[5,2,1,""],retry:[5,2,1,""],set_done:[5,1,1,""],set_enqueued:[5,1,1,""],set_failed:[5,1,1,""],set_pending:[5,1,1,""],set_started:[5,1,1,""],state:[5,2,1,""],store:[5,1,1,""],user_id:[5,2,1,""],uuid:[5,2,1,""]},"odoo.addons.queue_job.jobrunner":{channels:[1,3,0,"-"],runner:[9,3,0,"-"]},"odoo.addons.queue_job.jobrunner.channels":{Channel:[1,0,1,""],ChannelJob:[1,0,1,""],ChannelManager:[1,0,1,""],ChannelQueue:[1,0,1,""],PriorityQueue:[1,0,1,""],SafeSet:[1,0,1,""],split_strip:[1,4,1,""]},"odoo.addons.queue_job.jobrunner.channels.Channel":{configure:[1,1,1,""],fullname:[1,2,1,""],get_jobs_to_run:[1,1,1,""],get_subchannel_by_name:[1,1,1,""],get_wakeup_time:[1,1,1,""],has_capacity:[1,1,1,""],remove:[1,1,1,""],sequential:[1,2,1,""],set_done:[1,1,1,""],set_failed:[1,1,1,""],set_pending:[1,1,1,""],set_running:[1,1,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelJob":{cmp_no_eta:[1,1,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelManager":{get_channel_by_name:[1,1,1,""],get_channel_from_config:[1,1,1,""],get_jobs_to_run:[1,1,1,""],get_wakeup_time:[1,1,1,""],notify:[1,1,1,""],parse_simple_config:[1,7,1,""],remove_db:[1,1,1,""],remove_job:[1,1,1,""],simple_configure:[1,1,1,""]},"odoo.addons.queue_job.jobrunner.channels.ChannelQueue":{add:[1,1,1,""],get_wakeup_time:[1,1,1,""],pop:[1,1,1,""],remove:[1,1,1,""]},"odoo.addons.queue_job.jobrunner.channels.PriorityQueue":{add:[1,1,1,""],pop:[1,1,1,""],remove:[1,1,1,""]},"odoo.addons.queue_job.jobrunner.channels.SafeSet":{remove:[1,1,1,""]},"odoo.addons.queue_job.models":{base:[5,3,0,"-"],queue_job:[5,3,0,"-"]},"odoo.addons.queue_job.models.base":{Base:[5,0,1,""]},"odoo.addons.queue_job.models.base.Base":{with_delay:[5,1,1,""]},"odoo.addons.queue_job.models.queue_job":{QueueJob:[5,0,1,""]},"odoo.addons.queue_job.models.queue_job.QueueJob":{_inherit:[5,2,1,""],_name:[5,2,1,""]},connector:{exception:[4,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","module","Python module"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:module","4":"py:function","5":"py:exception","6":"py:staticmethod","7":"py:classmethod"},terms:{"4d0":15,"4d1":15,"abstract":[0,2,7,10,11],"b\u00e9al":14,"boolean":2,"break":1,"case":[0,2,12],"catch":2,"char":[0,6,7],"class":[0,1,2,3,5,6,7,8,9,10,12,15],"default":[1,2,5,8,9,12],"export":[2,3,5,7,8,10,12],"final":[0,2,5,7,11],"float":2,"function":[2,5,10,12,15],"import":[1,2,6,7,8,10,11,12],"int":[0,2],"jo\u00ebl":14,"long":[2,6],"new":[1,2,5,6,7,8,9,11,12,15],"public":15,"return":[0,1,2,3,5,7,8,10,12],"rh\u00f4nalia":14,"s\u00e9bastien":14,"st\u00e9phane":[12,14],"static":5,"super":[2,3,7,10],"switch":2,"syst\u00e8m":14,"true":[0,1,2,5,6,7,10,12],"try":[2,5],"var":5,"while":9,Added:12,Adding:1,And:[2,8,10,14],But:[2,10],CMS:11,For:[0,2,3,6,8,10,15],IDs:2,Its:5,Jos:14,Not:11,One:[2,12],Such:[9,15],The:[0,1,2,3,4,5,6,8,9,10,11,12,13,15],Their:6,Then:[2,10,13],There:2,These:1,Use:[2,12,15],Used:[2,5],Using:[1,2,9,10],With:2,YES:12,__init__:6,__manifest__:6,_after_export:2,_apply_on:[2,3,7,10],_backend_field:2,_backend_typ:10,_base_backend_adapt:12,_base_backend_adapter_usag:2,_base_bind:12,_base_mapp:12,_base_mapper_usag:2,_build:13,_call:7,_collect:[2,3,7,10],_creat:2,_create_data:2,_default_binding_field:2,_delay_import:2,_descript:[0,6,7,10],_event:[3,7,10],_export_depend:2,_external_field:2,_has_to_skip:2,_inherit:[0,2,3,5,6,7,8,10],_lock:2,_logger:[3,7],_magento_model:7,_map_data:2,_model_nam:[2,10],_modules_compon:2,_name:[0,2,3,5,6,7,10,12],_odoo_field:2,_register_hook:2,_retry_unique_viol:2,_run:2,_select_vers:0,_should_import:2,_sql_constraint:0,_super:2,_sync_date_field:2,_updat:2,_update_data:2,_usag:[2,3,7,10],_validate_create_data:2,_validate_update_data:2,a_funct:2,abil:11,abl:2,abort:9,abov:[1,2,3,5,9],absent:1,absolut:2,abstractcompon:[2,7,10],abstractmodel:[3,6,10,12],accept:[9,13,15],access:[2,12],accessor:15,accompani:15,accord:[1,2,7,9],account:[2,7],accountinvoic:7,acquir:[2,12],across:[2,8],acson:[11,14],act_window:5,action:[2,5,8,10,12],action_invoice_paid:7,activ:[2,12],actor:2,actual:[1,9,13],adapt:[6,7,10,11,12],add:[0,1,2,3,8,9,10,11,12,13,16],added:[2,3,5,6,9,10,12],adding:8,addit:[11,15],addon:[0,1,2,3,4,5,6,7,8,9,10,12],address:[10,15],adjust:9,advic:13,advis:[2,8],advisori:[2,12],advisory_lock_or_retri:2,after:[1,2,5,9,12,13],agre:16,akret:[11,14],alexandr:14,all:[0,1,2,3,5,6,8,9,10,12,13,14,16],allow:[2,3,5,9,10,12,14,15],alongsid:2,alreadi:[0,1,2,5,7,10,15],also:[0,1,2,3,5,6,8,9,10,12,13,15],altern:9,although:9,alwai:2,amazon:11,among:15,amount:14,ani:[2,3,5,6,11,15],anonym:9,anoth:[2,6,8,10,12],anothercompon:2,anybox:[9,13,14],anymor:1,anyth:[2,8],apertoso:14,api:[0,1,2,3,5,6,7,12],app:11,appear:5,appli:[1,2,8,10,15],applic:[1,9,15],apply_on_model:2,approach:13,appropri:0,arbitrari:[1,2],arg:[2,3,5,7],argument:[2,3,5,10,12,15],around:[0,1],arriv:5,arthur:14,articul:0,ascii:12,asid:1,ask:[2,9,10],aspect:10,assert:[2,5],assign:[2,5,12],associ:[1,9],assum:2,asynchron:[5,11],attach:[1,2,5],attempt:9,attr:[2,10],attribut:[0,2,3,10,12],auguria:14,author:[6,15],auto:1,autocr:[1,9],automat:[9,12],autosub:1,avail:[0,1,2,8,9,10,11],avanzosc:14,avoid:12,await:3,awar:6,back:[2,12],backend:[3,4,7,11],backend_adapt:[2,7,8,10,12],backend_id:[0,2,6,10],backend_model:0,backend_record:[2,7,10],backend_to_m2o:12,backendadapt:[2,8],backward:12,baconni:[11,14],balanc:9,bar:[1,2],base:[0,1,4,5,7,8,10,13,15],base_import_async:9,baseconnectorcompon:2,basemagentoconnectorcompon:[7,10],basemodel:[0,2,3,5,12],basi:2,basic:[0,2,8],batch:[2,8,10],baz:1,beau:14,becaus:[0,1,2,7,9,12],becom:2,bee:14,been:[2,3,4,5,7,8,9,10,11,12,14],befor:[1,2,3,5,9],begin:2,behavior:2,behaviour:1,being:[2,5,15],bello:14,belong:13,below:[3,7,8,15],benoit:14,besid:6,bessi:14,between:[0,2,6,8,9,10,11],bidoul:[12,14],bin:13,bind:[2,5,7,10,11,12],binder:[6,7,10,12],binder_for:[2,12],binding_extra_v:2,binding_field:2,binding_id:10,binding_model:2,bit:13,bitbucket:13,block:[2,11,12],boilerpl:6,boostrap:[11,13],bootstrap:[6,13],both:[2,7,8,15],bound:15,breviti:7,broken:12,brough:2,brows:[2,5,10,12],browse_record:2,buffer:16,bug:13,build:[2,11,13],build_registri:2,buildout:[9,13],built:2,burn:14,busi:6,button:[5,12],button_trigger_export_async:10,button_trigger_export_sync:10,cach:12,caches:2,call:[0,2,5,8,10,12,15],callabl:0,callback:0,camptocamp:[11,14],can:[0,1,2,3,4,5,6,8,9,10,12,13,15,16],cancel:12,candid:2,cannot:2,capabl:[2,8],capac:[1,9,12],care:2,cascad:0,cat:2,catalog:13,categ_id:2,categori:[0,2,6],caus:4,caveat:11,certain:[11,15],cfg:13,chambreuil:14,chanc:9,chang:[2,5,6,10,11,15],change_context:[10,12],changed_bi:2,changed_by_field:[2,12],channel:[5,11,12],channel_nam:1,channeljob:1,channelmanag:1,channelqueu:1,check:[2,5,9,10],checkpoint:11,child:2,children:[1,2],choic:[11,15],choos:[2,15],christoph:14,classmethod:[1,5],clean:[2,12],clear:[2,12,16],client:[0,2,7],close:2,closur:2,cmi:11,cmp_no_eta:1,code:[2,3,6,8,10,11,12,13,15],coffe:6,coffee_bind:6,coffee_id:6,coffeebackend:6,coffeebind:6,coll:2,collect:[0,6,7,8,10],collectedev:[3,10],collection_nam:2,colpaert:14,column:0,com:[8,10,12,13],combel:14,combin:[1,15],come:[1,2,8,9],comma:1,command:2,comment:1,commerc:[8,11,13],commit:[2,12],common:[2,6,8,12],commonli:10,commun:12,comodel_nam:[0,6],compani:14,compar:[1,10],comparison:1,compat:15,compet:[1,9],compil:13,complet:[1,3,5,13],complex:10,compon:[0,1,11],component_by_nam:2,component_ev:[2,3,6,8,10],component_usag:2,componentbuild:2,componentdatabas:2,componentexcept:2,componentregistri:2,components_registri:2,compos:[2,10],comput:[2,5,15],compute_st:2,concept:[11,13],concern:15,concret:[0,2,6,8],concurr:[2,9],cond:3,condit:[3,15],config:1,config_str:1,configur:[1,2,6,11,12],confirm:9,conflict:2,confus:12,connect:[6,9,11,12],connector:[0,4,7,9,12,14],connector_base_product:12,connector_coffe:6,connector_ecommerc:8,connector_magento:13,connector_no_export:[2,3,10],connector_xxx:13,connectorbackend:0,connectordb:13,connectorenviron:[10,12],connectorexcept:4,connectorlisten:[2,8],connectorsess:[10,12],connectorunit:[0,4,10,12],consid:[1,2,5,15],consolid:0,constrain:10,constraint:2,contain:[0,2,10,12,15],context:[0,2,3,8,10,12],contextmanag:2,contextu:16,contribut:[11,14],contributor:11,conv_typ:2,convei:15,convent:6,convers:[2,8],convert:[2,7,8],copi:[2,15],copyright:15,core:[7,10,12],corp:14,correct:[2,10],correctli:[9,12],correspond:[2,15],could:[0,3,10,12],count:5,counter:12,countri:2,country_id:2,cours:6,cover:15,crash:9,creat:[1,2,3,5,6,7,8,9,10,12],createdb:13,creation:[1,2,3,12],creativ:[2,10],criteria:[2,7],crm:11,crud:[2,8,12],crudadapt:2,ctx:5,current:[1,2,5,10,12],custom:[0,2,7,8,10,11,12],data:[0,2,4,6,7,8,12,15],databas:[2,5,9,12,13],date:[0,1,5],date_cr:[1,5],date_don:5,date_enqueu:5,date_start:5,datetim:1,david:14,db_host:9,db_name:1,db_port:9,db_record:5,db_record_from_uuid:5,dbfilter:12,dbname:9,dead:10,debonix:14,debug:[5,9,15],decid:15,declar:[1,2,6],decor:[2,3,8,10],decoupl:[2,8],dedic:[1,9],deem:15,def:[0,2,3,5,7,10],default_channel:[5,10],default_lang_id:10,default_warehous:2,defin:[0,2,5,8,12,15],definit:[0,15],del:14,delai:[1,2,3,5,8,9,10,11,12],delay:5,delay_export:10,delayablerecordset:5,delet:[2,8,10,12],deletesynchron:12,depend:[2,6,10,13],deprec:[0,12],dequeu:[1,9],descend:10,describ:8,descript:[5,6,12],design:[11,14],despit:1,destin:2,detail:[2,8,12,15],detect:9,determin:5,develop:[1,5,8,12,13,14],diagram:[1,9],dict:[2,5],dictionari:[1,12],didn:3,dietrich:14,differ:[1,2,3,8,10,15],dijkstra:14,direct:[2,8,11,12,15],directli:2,disabl:[3,5],discuss:2,dispatch:[9,10],displai:[0,12,15],distinct:2,distinguish:15,distribut:15,dive:13,dlanguag:13,do_anyth:10,do_someth:10,doc:5,document:[1,2,6,8,12,13,15],doe:[1,2,4,10,11,15],doesn:3,domain:[2,13],done:[0,1,2,3,5,12,14],donelli:14,dot:[1,2,12],down:[1,9],downstream:[1,9],drop:1,drupal:11,due:[0,1],duplic:2,dure:[2,4,10,14,15],dynam:10,each:[1,2,3,5,8,9,15],eas:[8,12],easi:11,easili:11,ebai:11,edit:[6,13],editor:12,eeze:14,effect:[10,12,15],effort:15,either:[0,2,9,15],elaps:1,element:1,elico:14,els:[2,7,8,10],empti:[1,2,13],en_u:10,enabl:[0,9,12],encourag:8,end:[1,2],enforc:[1,9],engin:[11,15],enough:1,enova:14,enqueu:[1,5,9],ensur:15,ensure_on:[2,5,7,10],entri:[1,2],entrypoint:[2,8],env:[2,3,5,10,12],environ:[2,8,9,10,12],equal:[1,2,3],equival:2,eric:14,erp:11,error:[2,4,12,16],especi:13,estim:5,eta:[1,5],etc:[1,9],evalu:3,even:[1,2],event:[2,11,15],eventu:2,ever:15,everi:[2,6,8,10],everyon:15,evolv:10,exampl:[0,1,2,3,5,6,7,8,9,10,11,13],exc_info:5,except:[0,1,5,9,11,12,15],exchang:11,exclud:[1,15],exclude_addon:2,execut:[1,2,3,5,9,10,15],exist:[0,1,2,4,5,6,7,9,10,13],expect:[2,5],explain:15,explic:1,explicitli:[2,9],export_one_th:5,export_partn:5,export_pay:7,export_product:5,export_record:[2,3,10],export_synchron:10,exporter_class:2,exportmapchild:2,exportmapp:2,exportsynchron:12,express:3,extend:[2,3,8,10,11],extens:0,extent:15,extern:[0,2,4,6,7,8,10],external_data:7,external_id:[0,2,7,10],external_to_m2o:2,externalbind:0,extra:2,extra_arg:5,extra_mapp:2,extract:[5,8,10,12],fabio:14,facil:[15,16],factori:10,fail:[1,2,5,12],failur:[4,12],faith:15,fals:[1,2,4,9,10],familiar:2,far:[2,5],fayol:14,featur:[3,6,8,10,12],fell:14,few:[1,2,10],fewer:15,field:[0,2,3,6,7,8,10,12],field_nam:12,field_valu:12,file:[1,6,9,10,13,15],fill:[1,9],filter:[2,8],financi:11,find:[0,2,3,7,8,15],finish:9,fire:10,first:[1,2,3,5,6,10,12],fit:10,fix:12,flag:12,flexibl:[2,11],florent:14,flow:[1,2,9],flush:16,follow:[1,2,3,6,9,10,12,13,15],follow_m2o_rel:2,foo:[1,2],foobar:2,foobarbas:2,footnot:9,for_creat:2,for_model_nam:12,forc:[2,9,10,11],form:[1,5,12,15],format:2,format_item:2,forward:3,found:[2,4,7],foundat:15,framework:[8,10,13,14],fred:1,free:15,french:12,from:[0,1,2,3,5,6,7,8,9,10,12,13,15,16],from_env:[10,12],frozendict:12,fsf:15,full:[1,11],fullnam:1,func:[2,5],fund:14,funder:14,further:2,futur:15,fuzzi:13,gain:10,gangloff:14,gener:[1,2,9,10,11,15],genericadapt:[7,10],genericexport:2,get:[1,2,3,5,7,8,9,10],get_backend:0,get_binder_for_model:12,get_channel_by_nam:1,get_channel_from_config:1,get_compon:10,get_connector_unit:10,get_connector_unit_for_model:12,get_environ:10,get_item:2,get_item_valu:2,get_jobs_to_run:1,get_subchannel_by_nam:1,get_wakeup_tim:1,gettext:13,github:[8,10,11,12,13],give:[2,5,8,15],given:[0,1,2,9,10,12,15],global:[2,3,10,12],glpi:11,glue:2,gnu:15,going:[1,9],gone:12,good:[10,15],googl:11,goran:14,got:11,govern:15,gpl:15,grace:12,graev:14,grand:14,greater:[2,9],greatli:10,guewen:[11,14],guid:[6,13],guillaum:14,guillot:14,gusto:14,had:10,halt:9,handl:[1,2,10],handler:9,hans:14,happen:[2,3],hardli:10,has:[1,2,3,4,5,6,7,8,9,10,11,12,14],has_capac:1,have:[0,1,2,3,5,6,9,10,12,13,15],header:15,hello:2,help:[2,16],helper:[10,12],here:[1,2,3,10,12,13,14,16],herein:15,herit:2,hierarchi:[1,9],high:[1,2,8,11],higher:[1,5],highli:7,hint:2,histor:13,hold:[1,2],hood:2,hook:[2,8],host:9,hour:5,how:[1,2,3,7,8,10,11],howev:[2,8,9],hsp:14,html:[12,13],http:[8,9,10,12,13,15],http_auth_password:9,http_auth_us:9,htw:14,human:5,ibo:14,idea:[10,13],ideal:13,ident:5,identifi:5,identity_kei:5,idiom:2,idmissinginbackend:4,ids:[2,7,10,12],ignor:[1,2,12],ignore_retri:4,illustr:[1,9],imagin:6,immedi:9,implement:[0,2,3,6,8,11,12],implicitli:[2,3,5,10],import_partn:7,import_record:[2,10],importmapchild:2,importmapp:2,importsynchron:12,improv:12,inact:12,inc:15,includ:[2,15],incompat:12,incorpor:15,increas:5,index:[6,11,12],indic:[2,5,8,10,12],infinit:[1,5],info:[3,7,9],inform:[2,5,13,15],inherit:[0,2,3,5,6,7,8,12],init:13,initi:[2,5,9],inito:14,inlin:15,input_field:2,insert:[1,9],insid:12,instal:[5,6,9,12,13,15],install_in_connector:12,instanc:[0,1,2,5,7,8,10,12],instanci:2,instanti:12,instead:[2,7,10,12],integ:[0,6],integr:10,integrityerror:2,intend:[1,2],interact:8,interest:8,interfac:[1,2,8,15],intermedi:9,internal_data:7,interrupt:9,intl:13,introduc:10,introspect:2,invalid:[2,4],invaliddataerror:[2,4],invoic:7,invok:15,is_module_instal:12,ish:2,isol:15,issu:12,itali:14,item:[1,2],items_valu:2,iter:1,its:[1,2,5,8,9,10,12,13,15],itself:[5,6,9],jacobi:14,jean:14,jira:11,job:[1,2,3,4,11,12,16],job_record_with_same_identity_kei:5,job_uuid:5,joberror:4,jobrunn:[1,9,12],jobrunner_db_host:9,jobrunner_db_port:9,join:[1,9],juliu:14,june:15,just:[2,3,12],keep:[2,16],kei:[1,2,3,4,5,9,10],kept:[2,5],keyerror:1,keyword:[2,5,12],kind:[2,3,6,10,11],know:[2,7,8,9,10],known:[2,10],kwarg:[2,3,5,7,10],kwd:2,laetitia:14,lambda:[2,3,10],lang:[10,12],lang_cod:[10,12],languag:13,last:[0,13],later:[1,2,4,5,15],latest:13,latter:2,launchpad:12,laurent:[12,14],layout:15,lazili:2,lc_messag:13,learn:11,least:[0,1,2,9],leav:11,lefev:14,len:1,length:[0,15],leonardo:[11,14],less:[1,9],lesser:15,let:[1,10],level:[1,2,8,9,10,12],lgpl3:15,lgpl:[6,11],librari:15,licens:[6,11],like:[2,5,9,10,12],limit:[0,1,2,9,15],line:[0,1,2,3,5,8,15],line_id:2,link:[0,2,6,7,8,15],linko:14,list:[0,1,2,3,7,10,11,12,14,15,16],listen:[11,12],load:[2,5,9],load_compon:2,local:13,localhost:9,locat:[0,2,6,7],lock:[2,12],lock_nam:2,log:[3,9,12,16],logger:[5,16],logic:[2,14],longer:[10,12],look:[2,6,13],lookup:[2,7,8,10],lot:10,low:[2,5,12],lower:1,luc:[11,14],lue:1,m2o:12,m2o_to_extern:2,machin:6,macro:15,made:15,magent:10,magento1700:10,magento1900:10,magento:[0,2,3,6,7,8,10,11,13,14],magento_api:2,magento_country_id:2,magento_custom:10,magento_id:[0,2,10,12],magento_loc:2,magento_model:0,magento_uniq:0,magentoapi:2,magentobackend:[0,2,7,10],magentobaseexport:10,magentobind:10,magentoerpconnect:[0,10,13],magentoimport:10,magentoimportmapp:10,magentolisten:10,magentoloc:2,magentopartneradapt:10,magentorespartnercategori:0,magentosaleimport:2,mai:[0,1,2,6,9,13,15,16],mail:[5,11,12],main:[2,9,10],maintain:[9,11],maison:14,major:11,make:[13,15],malt:14,manag:[1,2,9,11,12],mandatori:[0,2],mani:[2,3,4,8],manifest:11,manner:15,manual:[3,5,9,10],many2on:[0,2,6],many_compon:2,manyidsinbackend:4,map:[2,4,12],map_method:2,map_record:[2,7],mapchild:2,mapper:[6,7,8,10,12],mappingerror:4,maprecord:2,marcelo:14,mark:[1,9,14],martinelli:14,master:9,match:2,materi:15,mathia:14,matter:2,matthieu:14,maurer:[11,14],max_retri:5,maxim:14,maximum:[0,1,5,9],maxsplit:1,mayb:6,mean:[1,2,5,8,9,15],meaning:15,mechan:[1,2,12,15],member:1,memori:9,mention:10,merg:[12,13,16],messag:[2,9,12],metaclass:2,metacompon:2,metadata:8,meth:2,method:[0,2,3,5,6,8,10,12],micro:7,might:[2,6,10],mignon:[12,14],migrat:11,mind:14,minim:15,minimum:2,minut:5,miss:[1,2,12],mix:10,mkdir:13,mock_job_delay_to_direct:12,mode:15,model:[7,8,11,12],model_nam:[2,5,7,10,12],modif:15,modifi:[2,8,12,13,15],modul:[0,1,2,5,6,8,9,10,11,13],modular:11,monitor:11,monk:14,more:[1,2,8,10,13,16],most:[2,13],mostli:8,msg00253:12,msg:4,much:12,multi:[2,5,7,10],multicompani:12,multilevel:2,multiprocess:12,must:[0,1,2,3,5,6,8,9,10,15],mute:5,mute_logg:5,my_backend_bind_id:2,my_backend_product_product_odoo_uniq:2,mybind:10,mycompon:2,myeventlisten:[2,3,7],myfield:2,mymodeleventlisten:3,mypartneradapt:10,myproductimportmapp:10,myself:6,name:[0,1,2,3,5,6,7,8,9,10,11,12],name_of_the_modul:12,namespac:[2,10],ndp:14,necessari:[1,6,8,15],need:[0,2,6,7,8,10,12,13,15],needaction_mixin:5,net:12,network:[4,14],networkretryableerror:4,never:[2,10],next:[1,7,9],nicola:14,no_connector_export:[2,10],nocomponenterror:2,noconnectoruniterror:4,noexternalid:4,non:[1,12],none:[1,2,3,4,5,7,9,10,12,15],normal:[1,2,5,9,10],notabl:10,notat:[1,12],note:[1,5,6,8,9],noth:6,nothingtodojob:12,notic:15,notif:3,notifi:[1,2,7,9,10],now:[1,2,5,10,11,12],number:[2,5,6,15],numer:15,object:[1,2,5,15],observ:[1,3,8,9],obtain:12,obvious:[9,10],oca:[6,8,10,12,13],occur:[4,16],odoo:[0,1,2,4,5,7,8,9,10,12,13],odoo_id:[0,2,6],odoo_queue_job_channel:9,odoo_queue_job_host:9,odoo_queue_job_http_auth_password:9,odoo_queue_job_http_auth_us:9,odoo_queue_job_jobrunner_db_host:9,odoo_queue_job_jobrunner_db_port:9,odoo_queue_job_port:9,odoo_queue_job_schem:9,old:[10,12],olivi:14,omit:[1,7],on_:10,on_foo_cr:3,on_invoice_paid:7,on_record_cr:[3,10,12],on_record_unlink:3,on_record_writ:[2,3,12],on_someth:10,onc:[2,3],ondelet:[0,6],one2mani:2,one:[1,2,3,5,7,8,9,10,15],one_th:5,ones:[2,5,10],onli:[1,2,3,8,9,11,12,15],only_cr:2,open2bizz:14,open:[5,11,12],openbig:14,openerp:[11,12],oper:15,operationalerror:12,option:[1,2,5,9,10,12,15],orchestr:[2,8],order:[2,6,8,9,14],ordereddict:2,org:[13,15],organ:2,orm:12,oscommerc:11,other:[1,2,3,6,7,9,10,11,15],otherwis:[3,9,15],our:[2,6,7,10],out:[2,14],outdat:6,output:[2,12],output_field:2,output_valu:2,over:[1,2,10],overflow:[1,9],overhaul:11,overrid:[2,5,12],overridden:[0,2],overview:11,own:[2,6,8,10,11],page:11,paid:7,pair:0,parallel:9,paramet:[0,1,2,5,10,12,15],parent:[1,2,7,9,10],pars:[1,16],parse_simple_config:1,part:[0,8,10,15],particular:[2,15],partner:[0,2,5,7,8,10,12,14],partner_id:[5,7],partneradapt:[7,10],partneradapter1700:10,partneradapter1900:10,partneradapterfactori:10,partnerbind:7,partnerimport:7,partnermapp:7,pass:[1,2,5,8,9,10,12,15],password:[0,2,6,7],past:1,patch:13,path:[2,10],pattern:[3,5,8,12],payment:7,pend:[1,2,5,9,12],perfect:10,perform:[5,15],perman:15,permiss:15,permit:15,person:13,peter:14,pg_try_advisory_lock:2,pick:10,piec:[2,8,11,13],piganeau:14,pipelin:2,piston:[11,14],place:[3,12,15],pleas:6,pleasur:13,plug:8,pluggabl:8,poedit:13,point:[1,2,8,9,10],pointer:8,pool:[0,2,3,5],poor:6,pop:1,popul:9,port:9,portion:15,posgr:12,posit:12,possibl:[0,1,2,5,9,12],postgr:[2,9,12],postpon:5,pot:13,power:11,pprint:1,preced:2,precis:[2,3,10],prefer:10,prefix:10,prepar:2,prerequisit:8,presenc:1,present:[1,15],prestashop:[6,11,13],prestashoperpconnect:13,prevent:[2,9,12],previou:[1,2,10],previous:10,print:[2,10],prioriti:[1,2,5,7,9,10,12],prioritis:1,priorityqueu:1,pro:2,probabl:[6,8,13],problem:[2,15],proce:2,process:[5,9,11,12],produc:15,product:[0,2,5,9,10],product_id:2,product_tmpl_id:2,productimportmapp:10,productproduct:5,program:15,project:[6,13],promin:15,propag:2,properli:15,properti:[1,9,12],propos:[2,8,11,13],protocol:[2,8],provid:[0,2,5,15],proxi:15,public_buildbot_buildout:13,publicli:2,publish:15,pull:[12,13],purpos:[5,9,10,15],push:2,put:[1,2,6,8,10],python:[2,3,5,6,10,13],quantiti:2,queue:[1,6,7,9,10,11,12],queue_job:[1,2,4,5,6,7,8,9,10,12],queuejob:5,rais:[1,2,5,12,14],random:2,rapidli:11,rare:2,rather:[2,11],raw:[2,13],reach:1,read:[2,5,7,8,13],readabl:1,readi:[1,2,9],real:[5,6],realli:[2,8],reason:[2,13],rebuild:13,rebuilt:2,receiv:[9,15],recip:9,recogn:10,recombin:15,recommend:10,recomput:12,record:[0,2,3,5,6,7,8,10,12],record_id:[5,10],recordset:[2,5],recreat:2,redefin:10,redmin:11,ref:7,refactor:12,refer:[6,8,10,15],refin:8,regard:10,regist:[2,8],registr:2,registri:[2,12],reimplement:2,rel:0,rel_id:2,relat:[0,2,3,5,8,10,12],related_act:[5,10],related_action_magento_link:10,related_action_partn:5,related_action_product:5,related_action_unwrap_bind:10,relationship:2,releas:12,relink:15,remain:[9,15],remov:[0,1,10,12],remove_db:1,remove_job:1,renam:12,repeat:[10,13],replac:[1,2,12,16],report:13,repositori:[6,10],repres:[2,6,8],reproduc:15,request:[9,11,13],requeu:9,requir:[0,2,6,7,10,12,15],res:[0,2,3,5,7,8,10,12],res_id:5,res_model:5,reset_retri:5,respartn:5,respect:[2,12,13],respond:3,respons:2,restart:9,restrain:12,restrict:[0,3,6,15],result:[2,5,12,13],retri:[2,4,5,12],retriev:0,retry_count:5,retry_eta_second:5,retry_interv:5,retry_pattern:5,retry_second:2,retryabl:[5,12],retryable_exampl:5,retryablejoberror:[2,4,5,12],reus:13,revers:15,review:8,revis:15,rewritten:10,right:10,risk:[1,9],roadmap:11,robust:11,room:[1,9],root:[1,5,9,10,12],rove:14,rpc:2,rtype:7,rule:[1,2],run:[1,2,5,7,9,10,12,15],runjob:9,runner:[1,11,12],s3cr3t:9,safe:9,safeset:1,sai:[1,8,10],sake:[6,7],sale:[2,8],salesforc:11,same:[0,1,2,3,5,7,8,9,10,12,13,15],sane:13,schedul:[1,2],scheme:9,script:12,search:[2,7,8,10,11,12],search_read:2,sebastien:14,second:[1,2,4,5,9,12],section:[9,15],secur:[9,12],see:[2,3,5,6,8,11,13],seen:2,segreg:2,select:[0,10],select_vers:10,selection_add:0,self:[0,2,3,5,7,10,12],semant:12,sent:[1,3,9],sep:1,separ:[1,2],seq:1,sequenc:[1,9],sequenti:[1,9],serv:2,server:9,server_wide_modul:9,servic:[6,8,11,14],session:[2,10,12],set:[1,2,3,5,9,11,12],set_don:[1,5],set_enqueu:5,set_fail:[1,5],set_lang:12,set_pend:[1,5],set_run:1,set_start:5,sever:[2,8,10,11],severalcomponenterror:2,shall:15,share:[2,6,8,10,15],shell:2,shop:14,shortcut:2,shorten:12,should:[1,2,3,6,9,10,12,13],show:[10,12],shut:9,side:[2,3,6,15],similar:[10,15],simpl:[1,7],simple_configur:1,simpli:5,simplifi:7,sinc:[1,9],sing:2,singl:[0,9,15],situat:9,size:[0,2],skip:[2,3],skip_if:[2,3,10],skip_item:2,small:[2,8,15],smaller:1,smile:14,so10:2,softwar:[11,14,15],solut:14,some:[1,2,6,7,8],someth:[2,3,8,12],soon:5,sourc:[0,1,2,3,4,5,8,9,11,12,13,15],spawn:2,speak:[2,7,8],special:[2,6],specif:[2,5,10],specifi:[0,2,5,15],sphinx:13,sphinx_bootstrap_them:13,sphinxopt:13,spirit:15,split:[1,10],split_strip:1,spreadsheet:11,spree:11,sql:9,stabl:12,stage:1,stai:10,stale:9,standalon:[8,10],standpoint:9,start:[1,2,5,9,10,11,12],start_odoo:13,state:[1,2,5,9],statement:[9,15],statu:5,step:[6,13],still:[1,2,10,15],stock:10,stop:[9,12,13],store:[0,2,5,8,12],str:2,street:2,strictli:2,string:[0,1,2,6,7,12],strip:1,structur:[1,15],sub:[1,2,8,9],subchannel:[1,5,9],subchannel_nam:1,subclass:[2,10,15],submap:[2,8],submit:13,subscrib:[2,7,11],subsequ:5,succeed:16,sugarcrm:11,suggest:2,suit:1,suitabl:15,sunjka:14,supplement:15,suppli:[14,15],support:[1,2,8,10,12,13],sure:[2,9],suzann:14,sync:[2,7],sync_dat:[0,2],synchron:[0,5,6,7,12,16],synchronis:2,syntax:9,system:[1,2,3,8,9,15],tabl:9,tag:0,take:[2,3,6],taken:15,taktik:14,target:2,target_field:2,task:[2,5,10,11],tax:0,tax_class_id:0,tax_includ:2,techniqu:[1,9],templat:15,ten:15,term:[0,15],test:[1,5,12],test_queue_job_no_delai:5,than:[1,2,3,5,7,9,10,12,15],thank:[11,12,14],the_method:5,the_thing_to_export:5,thei:[1,2,7,8,9,10,12],them:[1,2,8,9,10,12,14,16],themselv:0,therefor:9,thi:[0,1,2,3,5,6,7,8,9,10,11,15],thing:[3,6,16],thoma:14,though:[1,2],thread:[5,9,12],three:10,throttl:[1,9],through:[2,6,8,9],throughout:2,thu:2,ticket:11,time:[1,2,3,4,5,7,9,15],tip:[9,13],to_attr:2,to_extern:2,to_intern:[2,7],to_openerp:12,togeth:[1,8,9,15],too:[6,9],total:[8,10],traceback:5,track:10,tracker:11,trail:1,transact:2,transform:[2,4,8],transifex:12,translat:[0,2,8,12],transmit:5,transport:2,transvers:[2,8],trigger:[2,3,11],tutori:8,two:[1,2,9],type:[2,5,11,12,13],typic:2,uncombin:15,under:[2,15],unicod:[2,12],uniqu:[0,2,4,5],unit:[2,10],unit_for:[10,12],unless:2,unlimit:9,unlink:3,unpickl:12,unset:9,until:[1,10,13],unwrap:2,unwrap_bind:[2,10],unwrap_model:2,updat:[2,7,9,12,13],upon:[2,12],upper:2,upstream:[1,9,12,13],url:12,usabl:2,usag:[2,5,7,8,10],use:[0,1,2,5,6,7,8,10,11,12,15],used:[0,2,7,8,10,12,15],useful:2,user:[2,3,5,8,12,15],user_id:5,usernam:[0,2,6,7],uses:[2,10,12,15],using:[0,2,3,5,7,8,9,13,15],usual:[0,2,5,10],utf:6,util:15,utter:2,uuid:[1,5,12],val:[3,10,12],valu:[0,1,2,5,7,9,12],vari:6,variabl:9,variou:12,vaucher:14,verbatim:15,vernichon:14,version:[0,6,7,11,12,15],via:[0,9],view:[1,5,8,9,12],view_mod:5,view_typ:5,violat:2,visual:[1,9],vocal:2,volumetri:11,vuillard:14,wai:[8,9,10],wait:[1,9],wakeup:1,wakeup_tim:1,want:[2,3,5,6,8,10],warehous:2,warehouse_id:2,water:[1,9],web:9,web_kanban:9,well:[2,8,10,15],were:12,wget:13,what:[2,8,10,11],whatev:15,when:[1,2,3,5,6,8,9,10,12,15,16],whenev:[1,9],where:[1,2,3,5,6,8,9,15],wherein:5,whether:15,which:[0,1,2,3,5,7,8,9,10,12,13,15,16],whitelist:12,whitespac:1,who:2,whole:0,wide:8,willowit:14,with_context:12,with_delai:[2,3,5,7,10],within:[2,10],without:[1,2,7,9,10,15],won:10,wordpress:11,work2:2,work:[1,2,5,8,11,12,15],work_context:2,work_on:[2,7,8,10],workcontext:[2,10,11],worker:[2,9,12],worker_id:12,working_context:2,world:2,would:[0,1,2,3,15],wrap:2,write:[2,3,5,7,8],written:8,wrong:12,xmlrpc_interfac:9,xmlrpc_port:9,xxx:[2,13],yannick:14,year:[10,14],yell:2,yes:7,yet:5,yield:[1,2],you:[0,2,3,5,6,8,9,10,13,15],your:[2,8,9,10,11,15],zabbix:11},titles:["Models","Channels","Components","Events","Exceptions","Queue","Boostrapping a connector","Code Overview","Connector Concepts","Configuring channels and the job runner","Migration Guide to the new Connector API","Odoo Connector","Changes","Contribute","Contributors","License","Roadmap"],titleterms:{"abstract":6,"break":12,"new":[10,13],adapt:[2,8],after:10,api:[10,11],asynchron:7,backend:[0,2,6,8,10],base:[2,3,11],befor:10,bind:[0,6,8],binder:[2,8],boostrap:6,builder:2,caveat:9,chang:12,channel:[1,9],checkpoint:8,code:7,collect:[2,3],compat:12,compon:[2,3,6,7,8,10],concept:8,configur:9,connector:[2,6,8,10,11,13],contribut:13,contributor:14,convent:13,core:[2,11],creat:13,declar:10,decor:5,delai:7,develop:11,doc:13,doe:9,entrypoint:10,event:[3,7,8,10],except:[2,4],extens:3,featur:11,financi:14,find:10,framework:11,futur:12,guid:[10,11],hint:10,how:9,indic:11,inherit:10,intern:[2,5],invoc:10,job:[5,7,8,9,10],licens:15,link:10,listen:[2,3,7,8,10],maintain:13,manifest:6,map:8,mapper:2,migrat:10,model:[0,2,3,5,6,10],name:13,notifi:3,observ:10,odoo:[3,6,11],onli:10,overview:7,project:11,queue:[5,8],refer:11,replac:10,roadmap:16,runner:9,section:10,some:10,start:13,synchron:[2,8],tabl:11,talk:11,thi:13,translat:13,trigger:[7,10],unregist:10,use:9,variou:10,version:10,want:13,warn:12,what:9,work:[7,9,10],workcontext:8}})