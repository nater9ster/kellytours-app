import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import AboutMe from "./components/AboutMe";
import RequestTour from "./components/RequestTour";
import KellyTours from './components/KellyTours';
import 'bootstrap/dist/css/bootstrap.css';
import SSL from './components/SSL';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<KellyTours />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/request" element={<RequestTour />} />
          <Route path="/.well-known/pki-validation" element={<SSL />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
