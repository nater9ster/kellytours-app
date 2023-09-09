import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import RequestTour from './components/RequestTour';
import Footer from './components/Footer';
import React from 'react';
import './App.css';
import KellyTours from "./KellyTours"; // Import the main component
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<KellyTours />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/request" element={<RequestTour />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
