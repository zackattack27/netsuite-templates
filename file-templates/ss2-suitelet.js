/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType Suitelet
 *
 * @Author: 
 * @Description:
 * @ScriptedRecord:
 * @ScriptDeployment:
 * @Endpoint:
 * 
 * @NAmdConfig /SuiteScripts/requireConfig.json
 */

define([
    "N/record",
    "N/search",
    "N/ui/serverWidget"
], runSuitelet);

/**
 * @param {record} nRecord
 * @param {search} nSearch
 * @param {ui} nUI
 */
function runSuitelet(nRecord, nSearch, nUI) {
    return {
        onRequest: execute
    };
    
    /**
     * @param {context} context
     */
    function execute(context) {
        if (context.request.parameters.password !== "add a password here") {
            return;
        }
        var outputJSON = {};
        outputJSON.label = "Hi! Message Received!";
        outputJSON.request = context.request;
        
        // context.request: The incoming request object
        // context.response: The outgoing response object
        var output = {
            label: "Hi! Message Received!",
            request: context.request
        };
        
        context.response.write({
            output: JSON.stringify(outputJSON, null, 4)
        });
    }
}