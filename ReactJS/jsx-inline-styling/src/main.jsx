import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  /* The attribute should be in camel case whereas the value should be in string format unlike traditional css */
  color: "indigo",
  backgroundColor: "orange",
  fontSize: "36px",
  border: "5px solid green"
}

// React Practice - to create dynamic styling
const msgColor = {
  color : "black"
}
const date = new Date();
const hours = date.getHours();
var message;

if(hours < 12 && hours > 0){
  message = "Good morning!";
  msgColor.color = "red";
}
else if(hours >12 && hours < 18){
  message = "Good evening!";
  msgColor.color = "green";
}
else{
  message = "Good night!";
  msgColor.color = "blue";
}


ReactDOM.render(
  <div>
    <h1 style={msgColor}>{message}</h1>
    <p style={customStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, fuga.</p>
  </div>,
  document.getElementById('root')
);