import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/kellytours.css"; // Main CSS file
import App from './App'; // Main component
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the main component here */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();


