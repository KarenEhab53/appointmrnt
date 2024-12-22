import React from "react";
import "./topdoctors.css";
import { doctors } from "../../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const TopDoctors = () => {
  return (
    <>
      <div className="SpecialityMenu">
        <div className="container">
          <div className="topic">
            <h2>Top Doctors to Book</h2>
            <p className="text2">
              Simply browse through our extensive list of trusted doctors.
            </p>
          </div>
          <div className="categorys">
            <div className="containers">
              <div className="row">
                {doctors
                  .slice(0,8)
                  .map((assetss) => (
                    <div className="collection">
                      <img
                        className="image"
                        src={assetss.image}
                        alt={assetss.name}
                      />
                      <div className="over">
                        <p className="state">. Available</p>
                        <p className="nameDoc">{assetss.name}</p>
                        <p className="text1">{assetss.speciality}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          
<Link to={"/doctors"}>
<button className="btnMore">Show ALL</button>

</Link>        </div>
      </div>
    </>
  );
};

export default TopDoctors;
