import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBg,
  HeroBtnWrapper,
  HeroLogo,
} from "./HeroElements";
import background from "../../images/background.png";
import logo from "../../images/logo.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroBg>
        <img src={background} alt="background" />
      </HeroBg>
      <HeroContainer>
        <HeroContent>
          <HeroLogo>
            <img src={logo} alt="logo" />
          </HeroLogo>

          <HeroH1>Devicist Design Works</HeroH1>
          <HeroP>
            Engineering custom hardware and software solutions for creative
            agencies and exhibit design houses. Specializing in rapid
            development of interactive installations and custom devices for
            trade show experiences.{" "}
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="contact"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Contact Us
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
