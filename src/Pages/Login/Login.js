import React, { useState } from "react";
import "./login.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="loginTitle">Login</h2>
        <p>Please login to book appointment</p>
        <div className="formGroup">
          <label className="formLabel" htmlFor="email">Email</label>
          <input className="formInput"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             required
          />
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="password">Password</label>
          <input className="formInput"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             required
          />
        </div>
        <button type="submit" className="loginButton">Login</button>
        <p className="haveAccount">
          You do not have an account? <a className="signupHere" href="/signup">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;