import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroLogo,
  VideoWrapper,
  InfoRow,
  Column1,
  Column2,
} from "./HeroElements";
import background from "../../images/background.png";
import logo from "../../images/logoW.png";
import Video from "../../video/placeholder.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroContent>
          <VideoWrapper>
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=uZWn7V7Tazs"
            />
            {/* <HeroVideo autoPlay src={Video} type="video/mp4" /> */}
          </VideoWrapper>
          <InfoRow>
            <Column1>
              <HeroLogo>
                <img src={logo} alt="logo" />
              </HeroLogo>

              <HeroH1>Devicist Design Works</HeroH1>
            </Column1>
            <Column2>
              <HeroP>
                Engineering custom hardware and software solutions for creative
                agencies and exhibit design houses. Specializing in rapid
                development of interactive installations and custom devices for
                trade show experiences.{" "}
              </HeroP>
            </Column2>
          </InfoRow>
        </HeroContent>
        {/* <HeroBg>
          <img src={background} alt="background" />
        </HeroBg> */}
      </HeroContainer>
    </>
  );
};

export default HeroSection;
