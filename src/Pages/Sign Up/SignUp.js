import React, { useState } from "react";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    
  };

  return (
    <div className="signupContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <h2 className="createAccount">Create Account</h2>
        <p className="plz">Please sign up to book appointment</p>
        <div className="formGroup">
          <label className="fullName" htmlFor="name">Full Name</label>
          <input className="enterName"
            type="text"
            id="name"
             value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label className="fullName" htmlFor="email">Email</label>
          <input className="enterName"
            type="email"
            id="email"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label   className="fullName" htmlFor="password">Password</label>
          <input className="enterName"
            type="password"
            id="password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signupButton">
          Create account
        </button>
        <p>
          Already have an account? <a className="loginHere" href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;