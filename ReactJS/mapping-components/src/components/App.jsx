import React from "react";

import Term from './Term.jsx';
import emojipedia from "../emojipedia.js";

function createCard(deets) {
  return <Term 
    key = {deets.id}
    emoji = {deets.emoji}
    name = {deets.name}
    meaning = {deets.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;