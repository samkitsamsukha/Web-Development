import React from "react";
import ReactDOM from "react-dom";

import Card from './Card.jsx';
import contacts from '../contacts.js'
import Avatar from "./Avatar.jsx";

function createCard(contact){
  return <Card
    key = {contact.id} // unique value must be assigned - 'Each child in a list should have a unique "key prop."
    value = {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    tel = {contact.phone}
    email = {contact.email}
  />
}

function App(){
  return(
    <div>
      <h1 className="heading">My contacts</h1>
      <Avatar img="../assets/samkit.jpg"/>

      {contacts.map(createCard)}

      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  )
}

export default App;