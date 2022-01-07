import React from "react";
import BackgroundImage from "../../images/background.png";
import { HeroContainer, HeroBg, ImageBg } from "./HeroElements";
const HeroSection = () => {
  return (
    <>
      <HeroContainer style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <HeroBg></HeroBg>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
