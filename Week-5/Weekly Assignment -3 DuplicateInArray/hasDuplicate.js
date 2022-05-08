/*
* Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
* */
var log4js = require("log4js");
var logger = log4js.getLogger();

const hasDuplicate = (array) => {
    let uniqueArray = new Set(array); // set take only unique values
    return array.length !== uniqueArray.size
}
logger.level = "debug"; // default level is OFF - which means no logs at all.
logger.info(hasDuplicate([0,1,2,0]));
