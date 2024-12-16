import React from "react";
import "./header.css";
import { assets } from "../../assets/assets_frontend/assets";
const Header = () => {
  return (
    <>
      <div className="HeaderOne">
        <div className="container">
          <div className="bgContainer">
            <div className="text">
              <h1 className="text1">Book Appointment With Trusted Doctors</h1>
              <div className="overlay">
                <img
                  className="profileImg"
                  src={assets.group_profiles}
                  alt=""
                ></img>
                <p className="text2">
                  Simply browse through our extensive list of trusted doctors,
                  schedule your appointment hassle-free.
                </p>
              </div>
              <button className="btnBook">
                Book Appointment
                <img className="btnArrow" src={assets.arrow_icon}></img>
              </button>
            </div>

            <img
              className="header_img"
              src={assets.header_img}
              alt="header_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
