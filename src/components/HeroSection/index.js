import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  HeroContainer,
  HeroH1,
  HeroText1,
  HeroText2,
  HeroBg
} from "./HeroElements";

const HeroSection = ()=> {
  return (
    <>
      <HeroContainer>
        <HeroText1>
        <HeroH1> We make interactive exhibits that are</HeroH1>
        </HeroText1>
        <HeroText2>
        <HeroH1> half digital &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;half physical</HeroH1>
        </HeroText2>
        <HeroH1></HeroH1>
        <HeroBg></HeroBg>
      </HeroContainer>
    </>
  );
  };

export default HeroSection;
