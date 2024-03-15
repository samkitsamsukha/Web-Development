const { log } = require('console');
const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs'); 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);
// Hello this is first text file Hello this is second text file

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag : 'a'} //append every time you enter node .\app.js
);
console.log("done with this task");
console.log("starting with the next one");