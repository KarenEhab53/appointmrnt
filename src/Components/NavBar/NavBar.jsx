import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets_frontend/assets";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarLine">
      <div className="NavBar">
        <div className="container">
          <div className="logo">
            <img src={assets.logo} alt="Logo" />
          </div>
          <button className="menu" onClick={toggleMenu}>
            <img
              src={isOpen ? assets.menu_icon  : assets.menu_icon}
              alt={isOpen ? "" : "Open Menu"}
            />
          </button>
          <div className={`links ${isOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>All Doctors</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <button className="btnCreate">Create Account</button>
        </div>
        <div className="lineBorder"></div>
      </div>
    </div>
  );
};

export default NavBar;
