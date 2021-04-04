import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // first argument to render is the element
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // second argument to render is the document node
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
