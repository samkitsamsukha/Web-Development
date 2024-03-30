import React from 'react';
import ReactDOM from 'react-dom';

import {add, subtract, multiply, divide} from './components.js';

ReactDOM.render(
  <div>
    <ul>
      <li>{add(2, 5)}</li>
      <li>{subtract(9, 2)}</li>
      <li>{multiply(7, 1)}</li>
      <li>{divide(21, 3)}</li>
    </ul>
  </div>,
  document.getElementById('root')
);