import React from "react";

const cars = ["Ford", "Tata", "Nexon"];

function Car(props){
  return <li>I have {props.brand}</li>
}

function Garage(){
  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car) => <Car brand={car}/>)}
      </ul>
    </div>
  )
}

export default Garage;