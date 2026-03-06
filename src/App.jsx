 import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import SearchDonor from "./SearchDonor";
import DonorList from "./DonorList";
import HowToDonate from "./HowToDonate";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchDonor />
      <DonorList />
      <HowToDonate />
      <Footer />
    </div>
  );
}

export default App;