import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/kellytours.css"; // Main CSS file
import App from './src/App'; // Main component
import reportWebVitals from "./src/reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the main component here */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();


