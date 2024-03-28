import React from "react";
// var React = require("react");
import ReactDOM from "react-dom";
// var ReactDOM = require("react-dom");

//ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW, OPTIONAL CALLBACK);
//Render method can take only a single HTML element hence put both h1 and p element inside a div element
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
