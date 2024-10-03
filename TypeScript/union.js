// Unions helps us when we are not sure about the data type which might be coming in
var score = 33;
// You can assign either a number or a string
console.log(score); // 33
score = 'Samkit';
console.log(score); // Samkit
var samkit = {
    name: 'Samkit',
    id: 7,
};
console.log(samkit);
samkit = { username: 'samkit', id: 7 };
console.log(samkit);
function getDbId(id) {
    // Make API Calls
    if (typeof id === 'string') {
        id = id.toUpperCase();
    }
    else {
        id = id + 2;
    }
    console.log("DB Id is ".concat(id));
}
getDbId(3);
getDbId('sam');
