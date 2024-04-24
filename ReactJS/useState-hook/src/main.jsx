import React from "react";
import ReactDOM from "react-dom";


var count = 0;

function increase(){
  console.log("Clicked")
  count++;
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
