import React, { useState } from "react";
import { doctors } from "../../assets/assets_frontend/assets"; 
import { useParams } from "react-router-dom";

import "./appointment.css";

const DoctorsAppointment = () => {
  const { docId } = useParams(); 
  console.log(docId);
  const selectedDoctor = doctors.find((doctor) => doctor._id === docId);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  console.log(selectedDoctor);


  if (!selectedDoctor) {
    return <h2>Doctor not found!</h2>;
  }

  const handleAppointment = () => {
    console.log("Doctor Name:", selectedDoctor.name);
    console.log("Date:", selectedDate );
    console.log("Time:", selectedTime );
  };
  const relatedDoctors = doctors.filter(
    (doctor) => doctor.speciality === selectedDoctor.speciality && doctor._id !== docId
  );
  return (
    <div className="appointment-container">
      {/* <div className="doctor-photo">

       </div> */}

       <div className="doctor-card">
        <img src={selectedDoctor.image} alt={selectedDoctor.name} />
        <div className="doctor-info">
          <h2>
            {selectedDoctor.name}
            {/* <img src={doctors.verified_icon} alt="Verified" /> */}
          </h2>
          <p>{selectedDoctor.degree} - {selectedDoctor.speciality}</p>
          <p>{selectedDoctor.experience}</p>
          <p>{selectedDoctor.about}</p>
          <strong>Appointment Fee: ${selectedDoctor.fees}</strong>
        </div>
      </div>

       <div className="booking-section">
        <h3>Booking Slots</h3>
        <div className="date-slots">
          {["SAT 8","SUN 9","MON 10", "TUE 11", "WED 12", "THU 13", "FRI 14"].map((date) => (
            <button
              key={date}
              className={selectedDate === date ? "active" : ""}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>
        <div className="time-slots">
          {["8:00 AM","8:30 AM", "9:00 AM","9:30 AM", "10:00 AM", "10:30 AM","11:00 AM" ,"11:30 AM"].map((time) => (
            <button
              key={time}
              className={selectedTime === time ? "active" : ""}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        
        <button className="book-btn" onClick={handleAppointment}>
          Book an appointment
        </button>
      </div>
      <div className="related-doctors">
        <h1>Related Doctors</h1>
        <p className="subtitle">Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctor-list">
          {relatedDoctors.map((doctor) => (
            <div key={doctor._id} className="doctor-item">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-details">
                <h4>{doctor.name}</h4>
                <p>{doctor.speciality}</p>
                <p><span className="available">● Available</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default DoctorsAppointment;