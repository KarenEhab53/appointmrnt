import React from "react";
import "./specialitymenu.css";
import { specialityData } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <>
      <div className="SpecialityMenu">
        <div className="container">
          <div className="topic">
            <h2>Specialties</h2>
            <p className="text2">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div className="category">
            <div className="containers">
              <div className="row">
                {specialityData.map((assetss) => (
                  <Link to={"/doctors"}>
                    <div className="collection">
                      <img
                        className="image"
                        src={assetss.image}
                        alt={assetss.name}
                      />
                      <h3 className="text1">{assetss.speciality}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialityMenu;
