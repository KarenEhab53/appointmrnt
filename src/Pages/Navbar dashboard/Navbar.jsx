import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const NavBarB = () => {
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
          <div className={`linkss ${isOpen ? "open" : ""}`} onScroll={closeMenu}>

             <Link to={'/login'}> <button className="btnCreate">Log In</button></Link>
          </div>
        </div>
        <div className="lineBorder"></div>
      </div>
    </div>
  );
};

export default NavBarB;
