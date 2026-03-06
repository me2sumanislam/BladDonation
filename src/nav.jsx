 import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>🩸 BloodCare</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Find Donor</a></li>
        <li><a href="#">Donate Blood</a></li>
        <li><a href="#">Request Blood</a></li>
        <li><a href="#">Donor List</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="auth-btn">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;