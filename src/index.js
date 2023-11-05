import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/kellytours.css"; // Import your main CSS file
import KellyTours from './KellyTours'; // Import the main component
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <KellyTours /> {/* Render your main component here */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();


