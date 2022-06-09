import React, { useState } from "react";
import {
  HeroContainer,
  HeroH1,
  HeroText1,
  HeroText2,
  HeroBg,
} from "./HeroElements";
import Hero from "../../images/HeroBg.png";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroText1>
          <HeroH1> We make interactive exhibits that are</HeroH1>
        </HeroText1>
        <HeroText2>
          <HeroH1>
            {" "}
            half digital &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;half
            physical&nbsp;&nbsp;&nbsp;
          </HeroH1>
        </HeroText2>
        <HeroBg src={Hero} />
      </HeroContainer>
    </>
  );
};

export default HeroSection;
