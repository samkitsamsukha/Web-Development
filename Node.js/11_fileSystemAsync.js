const {readFile, writeFile} = require('fs');
console.log("Start");
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return null;
    }
    const first = result;   
    console.log(result);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;   
        console.log(result);
        // Hello this is second text file
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            {flag : 'a'}
            , (err, result) => {
                if(err){
                    console.log(err);
                    return null;
                }
                console.log(result);
                // undefined
                console.log("done with the task")
            }
        )
    })
    // Hello this is first text file
})

console.log("starting next task");
// Start
// starting next task
// Hello this is first text file
// Hello this is second text file
// undefined
// done with the task