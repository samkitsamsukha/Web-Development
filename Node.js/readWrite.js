/**
 * Read from an external file
 */

const fs = require('fs')
console.log(typeof fs) //object

/**
 * Read in sync way
 */
console.log("Before starting to read")
const content = fs.readFileSync("d:/Web Development/Node.js/input.txt")
console.log(content)
console.log("After finishing to read")
/**
 * Before starting to read
 * <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 2c 0d 0a 49 20 61 6d 20 72 65 61 64 69 6e 67 20 66 72 6f 6d 20 69 6e 70 75 74 2e 74 78 74 20 66 69 6c 65>
 * After finishing to read
 */

console.log("Output content is : " + content)
/**
 * Output content is : Hello World,
 * I am reading from input.txt file
 */

//Async Reading
console.log("Before starting to read")
fs.readFile("d:/Web Development/Node.js/input.txt", (err, content) => {
    if(err){
        return console.log(err)
    }
    console.log("Content of the file is : " + content)
})
console.log("After finishing to read")
/**
 * Before starting to read
 * After finishing to read
 * Content of the file is : Hello World,
 * I am reading from input.txt file
 */

//Write to external file

console.log("Before")
fs.writeFileSync("d:/Web Development/Node.js/output1.txt", "I am Samkit Samsukha")
fs.writeFile("d:/Web Development/Node.js/output2.txt", "I am Samkit Samskuha, AGAIN!", (err) => {
    if(err){
        return console.log(err)
    }
    else{
        console.log("Written Successfully")
    }
})
console.log("After")