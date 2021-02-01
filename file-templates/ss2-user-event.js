/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType UserEventScript
 * @ScriptedRecordURL:
 * @DeploymentURL:
 *
 * @Author: 
 * @Description: 
 */

define([
        "N/runtime",
        "N/record",
        "N/search"
    ],
    function (ptLogStore, userEventTypes, ptUtils, nRuntime, nRecord, nSearch) {
        
        return {
            beforeLoad: beforeLoad,
            beforeSubmit: beforeSubmit,
            afterSubmit: afterSubmit
        };
        
        /**
         * INFO: Executed whenever a read operation occurs on a record, and prior to returning the record or page.
         * @Docs: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4407991781.html
         * @param {Object} context
         */
        function beforeLoad(context) {
            // context.oldRecord; // Doesnt exist at all on beforeLoad
            // context.newRecord;
            // context.type;
            // context.form;
            // log.debug('beforeLoad Triggered', context.type);
            
            // log.debug("wasTriggeredFromUI", wasTriggeredFromUI(nRuntime));
            // if(wasTriggeredFromUI(nRuntime.executionContext)) {
            //     // DO SOMETHING...
            // }
            
            switch (context.type) {
                case context.UserEventType.CREATE:
                    
                    break;
                case context.UserEventType.EDIT:
                    
                    break;
                case context.UserEventType.DELETE:
                    
                    break;
            }
        }
        
        /**
         * INFO: Executed prior to any write operation on the record.
         * @Docs: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4407992070.html
         * @param {Object} context
         */
        function beforeSubmit(context) {
            // context.newRecord;
            // context.oldRecord; // Doesnt exist on CREATE
            // context.type;
            // log.debug('beforeSubmit Triggered', context.type);
            
            switch (context.type) {
                case context.UserEventType.CREATE:
                    
                    break;
                case context.UserEventType.EDIT:
                    
                    break;
                case context.UserEventType.DELETE:
                    
                    break;
            }
        }
        
        /**
         * INFO: Executed immediately after a write operation on a record
         * @Docs: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4407992281.html
         * @param {Object} context
         */
        function afterSubmit(context) {
            // context.newRecord; // Doesn't exist on DELETE - Read Only
            // context.oldRecord; // Doesnt exist on CREATE - Read Only
            // context.type;
            // log.debug('afterSubmit Triggered', context.type);
            
            switch (context.type) {
                case context.UserEventType.CREATE:
                    
                    break;
                case context.UserEventType.EDIT:
                    
                    break;
                case context.UserEventType.DELETE:
                    
                    break;
            }
        }
        
        /////////////////////
        //////  UTILS  //////
        /////////////////////
        function wasTriggeredFromUI(runtime) {
            return (runtime.executionContext === nRuntime.ContextType.USER_INTERFACE);
        }
    });