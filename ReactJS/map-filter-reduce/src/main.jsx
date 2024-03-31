var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x){
  return x*2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers); // (5) [6, 112, 4, 96, 10]

// ***Alternative Method***
var newNumbers1 = []
function double1(x){
  newNumbers.push(x*2);
}
numbers.forEach(double1);

//Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(function (num) {
  return num>10; 
});
console.log(newNumbers2); 

// ***Alternative Method***
const newNumbers3 = [];
numbers.forEach(function (num){
  if(num>10){
    newNumbers3.push(num);
  }
});

//Reduce - Accumulate a value by doing something to each item in an array.
const sum0 = numbers.reduce(function (accumulator, currentNum){
  return accumulator+currentNum;
});
// ***Alternative Method***
var sum = 0;
numbers.forEach(function (num) {
  sum = sum + num;
});

//Find - find the first item that matches from an array.
const ans = numbers.find(function(num) {
  return num>10; //returns the first occurence of num>10
});

//FindIndex - find the index of the first item that matches.
const ansIndex = numbers.findIndex(function(num){
  return num>10; //returns the index of num>10
});