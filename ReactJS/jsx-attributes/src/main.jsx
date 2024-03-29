import React from 'react';
import ReactDOM from 'react-dom';

const img = "https://picsum.photos/200/300?grayscale"

ReactDOM.render(
  <div>
    <h1 className='heading' contentEditable='true' spellCheck='true'>Heading</h1>
    <div>
      <img src={img} alt='sample pic'/>
      <img src={img} alt='sample pic'/>
      <img src={img} alt='sample pic'/>
    </div>
  </div>,
  document.getElementById('root')
);

