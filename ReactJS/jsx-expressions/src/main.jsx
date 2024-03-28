import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Samkit';
const lName = 'Samsukha';
const age = 18;

ReactDOM.render(
  <div>
    <h1>Hello! {fName + " " + lName}</h1> {/*these curly braces are used to wrap JS code inside the HTML*/}
    {/* <h1>Hello! {fName}{lName}</h1> */}
    {/* <h1>Hello! {`${fName} ${lName}`}</h1> */}
    <h2>I heard your age is {age}</h2>
    <h3>Your lucky number must be {3+4}</h3>
    <h4>You must have had {Math.floor(Math.random()*10)} bananas</h4>
  </div>,
  document.getElementById('root')
);

// WE ARE NOT ALLOWED TO PUT CODE SNIPPET INTO THE {...}, NOT THE COMPUTATION CAN BE MADE IN HERE

// ReactDOM.render(
//   <div>
//     <h1>Hello! {name}</h1> {/*these curly braces are used to wrap JS code inside the HTML*/}
//     <h2>I heard your age is {
//         if(name === 'Angela'){
//           return 36;
//         }
//         else{
//           return 18;
//         }
//       }</h2>
//   </div>,  
//   document.getElementById('root')
// );


const currentYear = new Date().getFullYear();
const yourName = fName + " " + lName;
ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById('challenge')
);