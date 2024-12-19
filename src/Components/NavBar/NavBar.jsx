import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className="navbarLine">
      <div className="NavBar">
        <div className="container">
          <Link to={"/"}>
            <div className="logo">
              <img src={assets.logo} alt="Logo" />
            </div>
          </Link>

          <button className="menu" onClick={toggleMenu}>
            <img
              src={isOpen ? assets.menu_icon : assets.menu_icon}
              alt={isOpen ? "" : "Open Menu"}
            />
          </button>
          <div className={`links ${isOpen ? "open" : ""}`}>
            <Link to={"/"} onClick={closeMenu}>Home</Link>
            <Link to={"/doctors"}onClick={closeMenu} >All Doctors</Link>
            <Link to={"/about"}onClick={closeMenu}>About</Link>
            <Link to={"/contact"}onClick={closeMenu}>Contact</Link>
            <Link to={"/signup"}onClick={closeMenu}>
            </Link>
          </div>
              <button className="btnCreate">Create Account</button>
        </div>
        <div className="lineBorder"></div>
      </div>
    </div>
  );
};

export default NavBar;
