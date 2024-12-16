import React, { useState, useEffect } from "react";
import { doctors as data } from "../../assets/assets_frontend/assets";
import "./doctors.css"; // Combined CSS for styles

const Doctors = () => {
    const [filterion, setFilterion] = useState("ALL"); 
    const [productFilter, setProductsFilter] = useState(data); 
    const [showMenu, setShowMenu] = useState(false); 

    
    useEffect(() => {
        console.log("Filtering products based on filterion:", filterion);

        if (filterion === "ALL") {
            setProductsFilter(data);
        } else {
            setProductsFilter(data.filter((item) => item.speciality === filterion));
        }
    }, [filterion] );

    return (
        <>
            <div className="hamburger-container">
                <button className="hamburger-button" onClick={() => setShowMenu(true)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
            </div>

            {showMenu && (
                <div className="menu-window">
                    <button className="close-button" onClick={() => setShowMenu(false)}>
                        &times;
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("General Physician"); setShowMenu(false); }}>
                        General Physician
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("Gynecologist"); setShowMenu(false); }}>
                        Gynecologist
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("Dermatologist"); setShowMenu(false); }}>
                        Dermatologist
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("Pediatricians"); setShowMenu(false); }}>
                        Pediatricians
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("Neurologists"); setShowMenu(false); }}>
                        Neurologists
                    </button>
                    <button className="list-button" onClick={() => { setFilterion("Gastroenterologists"); setShowMenu(false); }}>
                        Gastroenterologists
                    </button>
                </div>
            )}

            <div className="pageAllDoctorsPage">
                {/* Buttons for filtering */}
                <div className="searchBar">
                    <button className="list-button" onClick={() => setFilterion("General physician")}>
                    General physician
                    </button>
                    <button className="list-button" onClick={() => setFilterion("Gynecologist")}>
                        Gynecologist
                    </button>
                    <button className="list-button" onClick={() => setFilterion("Dermatologist")}>
                        Dermatologist
                    </button>
                    <button className="list-button" onClick={() => setFilterion("Pediatricians")}>
                        Pediatricians
                    </button>
                    <button className="list-button" onClick={() => setFilterion("Neurologist")}>
                    Neurologist
                    </button>
                    <button className="list-button" onClick={() => setFilterion("Gastroenterologist")}>
                    Gastroenterologist
                    </button>
                </div>
                {/* Filtered Doctors */}
                <div className="filter">
                    {productFilter.length > 0 ? (
                        productFilter.map((item) => (
                            <div className="borderDocs" key={item._id}>
                                <img className="imagesDoctors" src={item.image} alt={item.name} />
                                <div className="status">
                                    <div className="status-dot"></div>
                                    <span>Available</span>
                                </div>
                                <h4 className="doctorsName">{item.name}</h4>
                                <h5 className="specialityLine">{item.speciality}</h5>
                            </div>
                        ))
                    ) : (
                        <h4>No doctors found for this category.</h4>
                    )}
                </div>
            </div>
        </>
    );
};

export default Doctors;
