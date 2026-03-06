 import React from "react";
import "./donorlist.css";

const donors = [
  { name: "Rahim", blood: "A+", location: "Dhaka" },
  { name: "Karim", blood: "B+", location: "Chittagong" },
  { name: "Salma", blood: "O-", location: "Khulna" },
];

function DonorList() {
  return (
    <section className="donor-list">
      <h2>Available Donors</h2>
      <div className="cards">
        {donors.map((donor, index) => (
          <div key={index} className="donor-card">
            <h3>{donor.name}</h3>
            <p>Blood Group: {donor.blood}</p>
            <p>Location: {donor.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DonorList;