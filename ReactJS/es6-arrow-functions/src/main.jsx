import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

function square (x){
  return x*x;
}
const sqOfNumbers = numbers.map(square);
console.log(sqOfNumbers);

const sqOfNumbers_ = numbers.map((x) => {
  return x*x;
});
// const sqOfNumbers_ = numbers.map(x => x*x);
console.log(sqOfNumbers_); //(5) [9, 3136, 4, 2304, 25]

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNumbers1 = numbers.map(x => x*2);
console.log(newNumbers1); //(5) [6, 112, 4, 96, 10]

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newNumbers2 = numbers.filter((x) => (x<10));
console.log(newNumbers2); //(3) [3, 2, 5]

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
const newNumbers3 = numbers.reduce((sum, current) => {
  return sum + current;
})
console.log(newNumbers3); //114

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumbers4 = numbers.find(x => x>10);
console.log(newNumbers4); //56

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumbers5 = numbers.findIndex(x => x>10);
console.log(newNumbers5); //1