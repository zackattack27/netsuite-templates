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
        "pt-log",
        "pt-utils",
        "N/record",
        "N/search"],
    /**
     * @param {Object} ptLog
     * @param {Object} ptUtils
     * @param {record} nRecord
     * @param {search} nSearch
     */
    (ptLog,
     ptUtils,
     nRecord,
     nSearch) => {
        class foo {
            constructor(value1, value2) {
                this.value1 = value1;
                this.value2 = value2;
            }
            
            functionName() {
                return this.value1 + this.value2;
                //return {
                //	value1: this.value1,
                //	value2: this.value2
                //};
            }
        }
        
        class ExtendedClass extends foo {
            constructor(value1, value2, value3) {
                super(value1, value2);
                this.value3 = value3;
            }
            
            functionName() {
                return this.value1 + this.value2 + this.value3;
            }
        }
        
        return {
            foo: foo,
            execute(value1, value2, value3) {
                const extendedClass = new ExtendedClass(value1, value2, value3);
                return extendedClass.functionName();
            }
        }
    }
); 