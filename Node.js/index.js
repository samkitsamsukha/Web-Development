/**
 * Bring the logic of mymodule.js over here
 */

/*
const sum = require("./mymodule.js")
console.log(sum) //[Function: add]
console.log(sum(5, 6)) //11
*/

const operations = require("./mymodule.js")
console.log(typeof operations) //object
console.log(operations.add(5, 6))
console.log(operations.prod(5, 6))