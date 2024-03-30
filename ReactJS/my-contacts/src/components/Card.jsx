import React from "react";
import ReactDOM from "react-dom";

import Avatar from "./Avatar.jsx";
import Details from "./Details.jsx";

function Card(props){
    return(
        <div className="card">
            <div className="top">
                {/* <p>{props.key}</p> - This is incorrect, create similar value as different prop and not key.*/} 
                <p>{props.value}</p>
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img}/>
        </div>
        <div className="bottom">
            <Details data={props.tel}/>
            <Details data={props.email}/>
        </div>
      </div>
    )
}

export default Card;