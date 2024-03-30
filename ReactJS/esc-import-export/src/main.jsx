import React from "react";
import ReactDOM from "react-dom";

import pie, {doublePi, triplePi} from './math.js';
// since pi is the default export, it can be named anything, as in pie whereas we must strictly follow the naming pattern for doublePi and triplePi.

import * as pi from './math.js';
//in case you don't wish to import individually, you can use * to import all functions/values available for export. And here naming becomes important.
// An object pi is created with attributes and values

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    {/* <li>{pi.default}</li> */}
    <li>{doublePi()}</li> {/*doublePi is a function and hence add ()*/}
    {/* <li>{pi.doublePi()}</li> */}
    <li>{triplePi()}</li>
    {/* <li>{pi.triplePi()}</li> */}
  </ul>,
  document.getElementById("root")
);
