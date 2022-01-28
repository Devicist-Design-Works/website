import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import background from "../images/background.png";

import {
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree,
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <InfoSection {...aboutObjOne} />
      <InfoSection {...aboutObjTwo} />
      <InfoSection {...aboutObjThree} />
    </div>
  );
};

export default Home;
