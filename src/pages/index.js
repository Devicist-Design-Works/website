import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import background from "../images/background.png";




const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <PortfolioSection />
      
    </div>
  );
};

export default Home;
