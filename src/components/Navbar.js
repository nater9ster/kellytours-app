import React from "react";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky top">
      <div className="container">
        <Link className="navbar-brand" to="/">@KellyManhattanTours</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/request">Request A Tour</Link>
            </li>
          </ul>
        </div>
      </div>
      <a className="nav-link" href="https://www.instagram.com/kellymanhattantours/">
        <i className="fab fa-instagram"></i> My Instagram!
      </a>
    </nav >
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark"><nav class="navbar navbar-expand-sm navbar-dark sticky-top">
    //   <a class="navbar-brand" href="#">@KellyManhattanTours</a>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li class="nav-item">
    //         <a class="nav-link" href="about.html">About Me</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="request.html">Request A Tour</a>
    //       </li>
    //       <li class="nav-item mr-md-auto">
    //         <a class="nav-link" href="https://www.instagram.com/kellymanhattantours/">
    //           <i class="fab fa-instagram"></i> My Instagram!
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    //   <div className="container">
    //     <a className="navbar-brand" href="/">KellyManhattanTours</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/about">About Me</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/request">Request A Tour</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav >
  );
};

export default Navbar;
