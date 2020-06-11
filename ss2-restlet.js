/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType RESTlet
 *
 * @Author: 
 * @Description: 
 * @ScriptedRecord:
 * @ScriptDeployment:
 * @Endpoint: 
 */

define([
    "N/search",
    "N/record"], runRestlet);

/**
 * @param {search} nSearch
 * @param {record} nRecord
 * @returns {{post: *, get: *, delete: *, put: *}}
 */
function runRestlet(nSearch, nRecord) {
    return {
        get: doGet,
        post: doPost,
        put: doPut,
        delete: doDelete
    };
    
    function doGet(requestParams) {
        return {
            message: "Hello from GET",
            params: requestParams
        };
    }
    
    function doPost(requestBody) {
        return {
            message: "Hello from POST",
            body: requestBody
        };
    }
    
    function doPut(requestBody) {
        return {
            message: "Hello from PUT",
            body: requestBody
        };
    }
    
    function doDelete(requestParams) {
        return {
            message: "Hello from DELETE",
            params: requestParams
        };
    }
    
    ////////////////////////////////
    //////  SHARED FUNCTIONS  //////
    ////////////////////////////////
    
    /////////////////////////////
    //////  GET FUNCTIONS  //////
    /////////////////////////////
    
    //////////////////////////////
    //////  POST FUNCTIONS  //////
    //////////////////////////////
    
    /////////////////////////////
    //////  PUT FUNCTIONS  //////
    /////////////////////////////
    
    ////////////////////////////////
    //////  DELETE FUNCTIONS  //////
    ////////////////////////////////
}