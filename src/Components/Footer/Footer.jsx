import React from 'react';
import './footer.css';
import Prespecto from '../../Images/InsiderStats.png';
import logo from '../../Images/Vector (5).png';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-brand">
            <img src={logo} alt="Image 2" className="footer-image" />
            <img src={Prespecto} alt="Logo" className="logoPhoto" />
          </div>
          <p className="footer-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul className="footer-links">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <p>+1-212-456-7890</p>
          <p>greatstackdev@gmail.com</p>
          <div className="footer-images">
            {/* <img src={Prespecto} alt="Image 1" className="footer-image" /> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 GreatStack - All Rights Reserved.
      </div>
    </footer>

    </>
  );
};

export default Footer;
