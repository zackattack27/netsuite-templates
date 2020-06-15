/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 * @NScriptType MapReduceScript
 *
 * @DocsMapReduceEntryPoints: https://XXXXXXXX.app.netsuite.com/app/help/helpcenter.nl?fid=section_4685231336.html#subsect_1513893434
 * @DocsgetInputData(inputContext): https://XXXXXXXX.app.netsuite.com/app/help/helpcenter.nl?fid=section_4412447940.html
 *
 * @Author: 
 * @Description: 
 * @ScriptedRecordURL:
 * @DeploymentURL:
 * @SavedSearchURL: 
 */

define([
        "N/log",
        "N/search",
        "N/record",
        "N/file",
        "N/runtime"],
    /**
     * @param {log} log
     * @param {search} nSearch
     * @param {record} nRecord
     * @param {file} nFile
     * @param {runtime} nRuntime
     */
    function (log, nSearch, nRecord, nFile, nRuntime) {
        
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
                /*// Saved Search 
                return nSearch.load({id: "customsearch_name"});*/
                
                /*// Runtime Parameters
                var IDs = nRuntime.getCurrentScript().getParameter({ name: "custscript_pt_bq_cust_rec_int_id" });
                return {customRecordIDs: IDs};*/
    
                /*// CSV
                var csvFile = nFile.load({id: "5628382"});
                // Obtain an iterator to process each line in the file
                var iterator = csvFile.lines.iterator();
                // Skip the first line, which is the CSV header line
                iterator.each(function () {return false;});
                // Process each line in the file
                var resultsArray = [];
                iterator.each(function (line) {
                    var lineValues = line.value.split(',');
                    resultsArray.push({
                       recordInternalID: lineValues[6].toString() ,
                        recordQTY: parseFloat(lineValues[2])
                    });
                    return true;
                });
                return resultsArray;*/
                
                // Something else
                // return {}
            } catch (e) {
                log.error({title: "getInputData", details: JSON.stringify(e, null, 4)});
            }
        }
        
        /**
         * @governance: 1,000 units
         * @param {mapReduceContext} context
         */
        function map(context) {
            try {
                var json = JSON.parse(context.value);
                // log.debug("Map Data", JSON.stringify(json, null, 4));
                
                // context.write({
                //     key: context.key,
                //     value: context.value
                // });
            } catch (e) {
                log.error({title: "map:" + context.key, details: JSON.stringify(e, null, 4)});
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
                log.error({title: "reduce:" + context.key, details: JSON.stringify(e, null, 4)});
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
    });
