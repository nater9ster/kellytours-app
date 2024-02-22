import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/kellytours.css';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky top">
      <div className="container">
        <Link className="navbar-brand" to="/">@KellyManhattanTours</Link>
        <button
          className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link navbar-link-border" to="/about">About Me<br />Sobre mim</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar-link-border" to="/request">Request a tour, tickets, or other services<br />Solicitar um passeio, ingressos ou outros serviços</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
