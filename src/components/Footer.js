import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" align='center'>
      <h3 className="footer-text">KellyManhattanTours LLC</h3>
      <div className="social-icons">
        <a href="https://www.facebook.com/kellymanhattan/" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/kellymanhattantours" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
