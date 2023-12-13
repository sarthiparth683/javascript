import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import A1variables from './document/A1variables';
import A2ifelse from './document/A2ifelse';
import A3_loops1 from './document/A3_loops1';
import A3_loops2 from './document/A3_loops2';
import Practice1 from './document/ifelse';
import A4Arrays from './document/A4Arrays';
import A5functions from './document/A5functions';
import A6DOM from './document/A6DOM';
import A7Eventa from './document/A7Eventa';
import A11ClassObj from './document/A11Class&Obj';
import A11Error from './document/A11Error';
import App from './document/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A1variables></A1variables>
    <A2ifelse></A2ifelse>
    <A3_loops1></A3_loops1>
    <A3_loops2></A3_loops2>
    <Practice1></Practice1>
    <A4Arrays></A4Arrays>
    <A5functions></A5functions>
    <A6DOM></A6DOM>
    <A7Eventa></A7Eventa>
    <A11ClassObj></A11ClassObj>
    <A11Error></A11Error>
    <App />
  </React.StrictMode>
);
reportWebVitals();
