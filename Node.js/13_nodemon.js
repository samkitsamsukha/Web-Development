const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); //lodash function to retrieve items
console.log(newItems); //[ 1, 2, 3, 4 ]
console.log('Hello World');