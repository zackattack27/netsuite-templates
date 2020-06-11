/**
 * ss2-custom-module.js
 * @NApiVersion 2.x
 * @NModuleScope Public
 *
 *@Author: 
 *@Description: 
 */

// This script must create a record, so it loads the N/record module.
define([
        "N/record",
        "N/search"
    ],
    /**
     * @param {record} nRecord
     * @param {search} nSearch
     * @returns {{run: *}}
     */
    function (nRecord, nSearch) {
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
                log.error({title: e.name, details: e.message});
            }
        }
    }
);