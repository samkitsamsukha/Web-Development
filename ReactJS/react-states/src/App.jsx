import React from "react";

function strike(){
  document.getElementById('root').style.textDecoration = "line-through";
}

function unStrike(){
  document.getElementById('root').style.textDecoration = "none";
}

function App() {
  return(
    <div>
      <p>Complete ReactJS</p>
      <button onClick={strike}>Task Complete</button>
      <button onClick={unStrike}>Task Pending</button>
    </div>
  )
}

export default App;