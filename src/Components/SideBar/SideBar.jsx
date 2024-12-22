import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets_admin/assets";
import "./SideBar.css";
function SideBar() {
  return (
      <div className="sidebar">
        <div className="container">
              <div className={"linkss"}>
                <Link to={""} className="row"> <img src={assets.home_icon}></img>Dashbaord </Link>
                <Link to={""} className="row"> <img src={assets.appointment_icon}></img>Appointment </Link>
                <Link to={""} className="row"> <img src={assets.add_icon}></img>Add Doctor </Link>
                <Link to={""} className="row"> <img src={assets.people_icon}></img>Dashbaord </Link>
          </div>
        </div>
      </div>
  );
}

export default SideBar;
