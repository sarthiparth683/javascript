import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './document/App';

import Practice1 from './document/A1ifelse';
import Practice2Loops from './document/A2loop';
import A4Arrays from './document/A4Arrays';
import A5functions from './document/A5functions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Practice1></Practice1>
    <Practice2Loops></Practice2Loops>
    <A4Arrays></A4Arrays>
    <A5functions></A5functions>
   
    <App />
  </React.StrictMode>

);
reportWebVitals();
