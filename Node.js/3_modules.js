// Common Js - every file is a module by default
// Modules - encapsulated code, only share minimum
const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_altSyntax');
require('./7_mindGrenade');
sayHi("Samkit");
sayHi(names.manita);
sayHi(names.vineet);