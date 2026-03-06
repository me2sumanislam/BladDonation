 import React, { useState } from "react";
import "./search.css";

function SearchDonor() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    alert(`Searching donors for ${bloodGroup} in ${location}`);
  };

  return (
    <section className="search-donor">
      <h2>Find a Donor</h2>
      <div className="search-form">
        <select onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input 
          type="text" 
          placeholder="Enter Location" 
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </section>
  );
}

export default SearchDonor;