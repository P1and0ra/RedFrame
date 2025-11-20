// src/components/Footer/Footer.jsx
import "./Footer.css";
import React from "react";
import DropDownButton from "../Navbar/DropDownButton";

function Footer() {
  return (
    <footer className="netflix-footer">
      <div className="footer-container">
        <p className="footer-contact">
          Questions? <a href="#">Contact us.</a>
        </p>

        <div className="footer-links">
          <div className="footer-column">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Corporate Information</a>
            <a href="#">Legal Notices</a>
          </div>
          <div className="footer-column">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
            <a href="#">Only on Netflix</a>
          </div>
          <div className="footer-column">
            <a href="#">Account</a>
            <a href="#">Redeem Gift Cards</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
            <a href="#">Ad Choices</a>
          </div>
          <div className="footer-column">
            <a href="#">Media Center</a>
            <a href="#">Buy Gift Cards</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal Guarantee</a>
          </div>
        </div>

        <div className="footer-language">
          <DropDownButton />
        </div>
        <p className="footer-bottom">Netflix Poland</p>
      </div>
    </footer>
  );
}

export default Footer;