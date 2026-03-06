 import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Give Blood, Save Life</h1>
        <p>Your small act can save someone’s life today.</p>
        <button className="cta-btn">Find a Donor</button>
      </div>
      <div className="hero-img">
        <img src="https://cdn-icons-png.flaticon.com/512/3076/3076135.png" alt="Blood Donation" />
      </div>
    </section>
  );
}

export default Hero;