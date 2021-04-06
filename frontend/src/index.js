import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  // first argument to render is the element
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // second argument to render is the document node
  document.getElementById('root')
);