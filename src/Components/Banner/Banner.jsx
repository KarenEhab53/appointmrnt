import React from "react";
import "./banner.css";
import { assets } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="HeaderOne">
        <div className="containers">
          <div className="bgContainer">
            <div className="text">
              <h1 className="text1">
                Book Appointment With 100+ Trusted Doctors
              </h1>
              
              <Link to={"/signup"}>
              <button className="btnBook">
              Create account
              </button></Link>
            </div>
            <img
              className="header_img"
              src={assets.appointment_img}
              alt="header_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
