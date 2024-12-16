import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarLine">
      <div className="NavBar">
        <div className="container">
        <Link to={"/"}><div className="logo">
            <img src={assets.logo} alt="Logo" />
          </div></Link>

          
          <button className="menu" onClick={toggleMenu}>
            <img
              src={isOpen ? assets.menu_icon  : assets.menu_icon}
              alt={isOpen ? "" : "Open Menu"}
            />
          </button>
          <div className={`links ${isOpen ? "open" : ""}`}>
            <Link to={"/"}>Home</Link>
            <Link to={"/doctors"}>All Doctors</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
        <Link to={"/signup"}><button className="btnCreate">Create Account</button></Link>
          
        </div>
        <div className="lineBorder"></div>
      </div>
    </div>
  );
};

export default NavBar;
