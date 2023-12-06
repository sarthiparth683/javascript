import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import A1variables from './document/A1variables';
import A2ifelse from './document/A2operators&ifelse';
import A3loopsq from './document/A3loopsq';
import A3_loops from './document/A3_loops';
import Practice1 from './document/ifelse';
import A4Arrays from './document/A4Arrays';
import A5functions from './document/A5functions';
import A6DOM from './document/A6DOM';
import A7Eventa from './document/A7Eventa';
import App from './document/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A7Eventa></A7Eventa>
    <A1variables></A1variables>
    <A2ifelse></A2ifelse>
    <A3loopsq></A3loopsq>
    <A3_loops></A3_loops>
    <Practice1></Practice1>
    <A4Arrays></A4Arrays>
    <A5functions></A5functions>
    <A6DOM></A6DOM>
    <App />
  </React.StrictMode>
);
reportWebVitals();
