/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType ClientScript
 * @EntryPointDocumentation: https://xxxxxxxx.app.netsuite.com/app/help/helpcenter.nl?fid=section_4489981198.html
 * @AppliedToRecord: SalesOrder
 * @ScriptedRecordURL:
 * @DeploymentURL-SalesOrder:
 *
 * @Author: 
 * @Description: 
 *
 * @NAmdConfig /SuiteScripts/requireConfig.json
 */
define([
    "N/currentRecord",
    "N/ui/message",
    "N/ui/dialog"
], runClientScript);

/**
 * @param {currentRecord} nCurrentRecord
 * @param {message} nUIMessage
 * @param {dialog} nUIDialog
 */
function runClientScript(nCurrentRecord,
                         nUIMessage,
                         nUIDialog) {
    
    return {
        pageInit: pageInit,
        // lineInit: lineInit,
        // postSourcing: postSourcing,
        // saveRecord: saveRecord,
        // sublistChanged: sublistChanged,
        // validateDelete: validateDelete,
        // validateField: validateField,
        // validateInsert: validateInsert,
        // validateLine: validateLine,
        // fieldChanged: fieldChanged,
        // localizationContextEnter: localizationContextEnter,
        // localizationContextExit: localizationContextExit,
        onButtonClick: onButtonClick
    };
    
    /**
     * Executed when the page completes loading or when the form is reset.
     * The following sample tasks can be performed:
     * - Populate field defaults.
     * - Disable or enable fields.
     * - Change field availability or values depending on the data available for the record.
     * - Add flags to set initial values of fields.
     * - Provide alerts where the data being loaded is inconsistent or corrupt.
     * - Retrieve user login information and change field availability or values accordingly.
     * - Validate that fields required for your custom code (but not necessarily required for the form) exist.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410597671.html
     * @param context
     */
    function pageInit(context) {
        var currentRecord = context.currentRecord;
        var mode = context.mode;
        // alert("pageInit Triggered!");
        return;
    }
    
    function onButtonClick() {
        // var currentRecord = nCurrentRecord.get();
        log.debug("onPostToShipStationButtonClick", "CLICKED!");
        nUIDialog.alert({
            title: "Hello",
            message: "In Development. Please do not use yet."
        });
    }
    
    function showErrorMessage(msgText) {
        var myMsg = nUIMessage.create({
            title: "Cannot Save Record",
            message: msgText,
            type: nUIMessage.Type.ERROR
        });
        
        myMsg.show({
            duration: 5000
        });
    }
    
    /**
     * Executed when an existing line is selected.
     * This event can behave like a pageInit event for line items in an inline editor sublist or editor sublist.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693004.html
     * @param context
     */
    /*function lineInit(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        alert("lineInit Triggered!");
        return;
    }*/
    
    /**
     * Executed on transaction forms when a field that sources information from another field is modified.
     * This event behaves like a fieldChanged event after all dependent field values have been set.
     * The event waits for any slaved or cascaded field changes to complete before calling the user defined function.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410692646.html
     * @param context
     */
    /*function postSourcing(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        var fieldID = context.fieldId;
        alert("postSourcing Triggered!");
        return;
    }*/
    
    /**
     * Executed after the submit button is pressed but before the form is submitted.
     * The following sample tasks can be performed:
     * - Provide alerts before committing the data.
     * - Enable fields that were disabled with other functions.
     * - Redirect the user to a specified URL.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693749.html
     * @param context
     * @returns {boolean}
     */
    /*function saveRecord(context) {
        var currentRecord = context.currentRecord;
        alert("saveRecord Triggered!");
        return true; //Return true if you want to continue saving the record.
    }*/
    
    /**
     * Executed after a sublist is inserted, removed, or edited.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410692812.html
     * @param context
     */
    /*function sublistChanged(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        alert("sublistChanged Triggered!");
    }*/
    
    /**
     * Executed when removing an existing line from an edit sublist.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693608.html
     * @param context
     * @returns {boolean}
     */
    /*function validateDelete(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        alert("validateDelete Triggered!");
        return true; //Return true if the line deletion is valid.
    }*/
    
    /**
     * Executes when a field is about to be changed by a user or client side call.
     * This event executes on fields added in beforeLoad user event scripts.
     * The following sample tasks can be performed:
     * - Validate field lengths.
     * - Restrict field entries to a predefined format.
     * - Restrict submitted values to a specified range
     * - Validate the submission against entries made in an associated field.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693152.html
     * @param context
     * @returns {boolean}
     */
    /*function validateField(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        var fieldID = context.fieldId;
        var line = context.line;
        var column = context.column;
        alert("validateField Triggered!");
        return true; //Return true to continue with the change.
    }*/
    
    /**
     * Executed when you insert a line into an edit sublist.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693455.html
     * @param context
     * @returns {boolean}
     */
    /*function validateInsert(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        alert("validateInsert Triggered!");
        return true; //Return true if the line insertion is valid.
    }*/
    
    /**
     * Executed before a line is added to an inline editor sublist or editor sublist.
     * This event can behave like a saveRecord event for line items in an inline editor sublist or editor sublist.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410693302.html
     * @param context
     * @returns {boolean}
     */
    /*function validateLine(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        alert("validateLine Triggered!");
        return true; //Return true if the line is valid.
    }*/
    
    /**
     * Executed when a field is changed by a user or client side call.
     * This event may also execute directly through beforeLoad user event scripts.
     * The following sample tasks can be performed:
     * - Provide the user with additional information based on user input.
     * - Disable or enable fields based on user input.
     * @Documentation https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4410692508.html
     * @param context
     * @returns {boolean}
     */
    /*function fieldChanged(context) {
        var currentRecord = context.currentRecord;
        var sublistID = context.sublistId;
        var fieldID = context.fieldId;
        var line = context.line;
        var column = context.column;
        alert("fieldChanged Triggered!");
        return;
    }*/
    
    /**
     * Defines the function that is executed  when the record enters the localization context that is specified on the script deployment record.
     * @Documentation: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_157495533652.html
     * @param context
     */
    /*function localizationContextEnter(context) {
        var currentRecord = context.currentRecord;
    }*/
    
    /**
     * Defines the function that is executed  when the record exits that context.
     * @Documentation: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_157495540056.html
     * @param context
     */
    /*function localizationContextExit(context) {
        var currentRecord = context.currentRecord;
    }*/
}