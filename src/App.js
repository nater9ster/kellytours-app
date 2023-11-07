import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import AboutMe from "./components/AboutMe";
import RequestTour from "./components/RequestTour";
import KellyTours from './KellyTours';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<KellyTours />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/request" element={<RequestTour />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
