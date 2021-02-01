/**
 * @NApiVersion 2.x
 * @NModuleScope Public
 *
 * @Author:
 * @Description:
 *
 * @NAmdConfig /SuiteScripts/requireConfig.json
 */

define([
    "N/record",
    "N/search"
], callback);

/**
 * @param {record} nRecord
 * @param {search} nSearch
 * @returns {{run: *}}
 */
function callback(nRecord, nSearch) {
    return {
        run: run
    };
    
    /**
     * @param {Object} context
     */
    function run(context) {
        try {
            // Do things here.
        } catch (e) {
            log.error({title: e.name, details: e});
        }
    }
}