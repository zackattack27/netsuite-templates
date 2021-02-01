/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType MapReduceScript
 *
 * @DocsMapReduceEntryPoints: https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4685231336.html#subsect_1513893434
 * @DocsgetInputData(inputContext): https://3915509.app.netsuite.com/app/help/helpcenter.nl?fid=section_4412447940.html
 *
 * @Author:
 * @Description:
 * @ScriptedRecordURL:
 * @DeploymentURL:
 * @SavedSearchURL:
 *
 * @NAmdConfig /SuiteScripts/netsuite-services/Plant Therapy/NS/Modules/Utils/requireConfig.json
 */

define([
    "N/search",
    "N/record",
    "N/file"], initMapReduce);

/**
 * @param {search} nSearch
 * @param {record} nRecord
 * @param {file} nFile
 */
function initMapReduce(
    nSearch,
    nRecord,
    nFile) {
    
    /**
     * returns {getInputData, map, reduce, summarize}
     */
    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce,
        summarize: summarize,
        config: {
            exitOnError: true,
            retryCount: 3
        }
    };
    
    /**
     * @governance: 10,000 units
     * @returns {Object}
     */
    function getInputData() {
        try {
            return nSearch.load({id: "customsearch_name"});
            // return {}
        } catch (e) {
            log.debug("ERROR: getInputData", JSON.stringify(e, null, 2));
        }
    }
    
    /**
     * @governance: 1,000 units
     * @param {mapReduceContext} context
     */
    function map(context) {
        try {
            var json = JSON.parse(context.value);
            // ptLogStore.store1(JSON.stringify(json, null, 4));
            
            // context.write({
            //     key: context.key,
            //     value: context.value
            // });
        } catch (e) {
            log.debug("ERROR: map" + context.key, JSON.stringify(e, null, 2));
        }
    }
    
    /**
     * @governance: 5,000 units
     * @param {mapReduceContext} context
     */
    function reduce(context) {
        try {
            var jsonArray = [];
            context.values.forEach(function (value) {
                jsonArray.push(JSON.parse(value));
            });
            log.debug("jsonArray", JSON.stringify(jsonArray, null, 4));
        } catch (e) {
            log.debug("ERROR: map" + context.key, JSON.stringify(e, null, 2));
        }
    }
    
    /**
     * @governance: 10,000 units
     * @param {mapReduceSummary} context
     */
    function summarize(context) {
        log.audit({
            title: "SUMMARIZE",
            details:
                "Usage units consumed: " +
                context.usage +
                " - Concurrency: " +
                context.concurrency +
                " - Number of yields: " +
                context.yields +
                " - Input Errors: " +
                context.inputSummary.error,
        });
    }
}