import React from "react";
// import sections
import Intro from "../components/sections/CaseStudy/Intro";
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";

const IntroContent = {
  title: "Regenerative Braking Demo",
  description:
    "To promote KIA's regenerative braking technology, we developed an interactive demo. Pressing an accelerator pedal drives a car wheel. The brake both stops the wheel and recharges the virtual battery displayed on the dashboard. LED lighting reinforces the user interactions.",
  imgSrc: require("./../assets/images/wheelOutlineBG.png"),
  youtubeUrl: "o-eduqKUgx8",
};

const FirstContactContent = {
  subject: "Project Proposal",
  greeting: "Hi Guys",
  body: "It keeps coming...KIA is looking to create an experience to demonstrate regenerative braking. Idea is that a wheel spins and you press a brake pedal which stops it and watch as a battery display lights up, showing you're braking. We have 6 weeks.",
};

const DesignContent = {
  body: "Our initial research ...",
  bgImage: require("./../assets/images/axleOutline.png"),
  images: [
    {
      src: require("./../assets/images/portfolio/braking/emailSketch.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/braking/brakingSim.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/braking/model.png"),
      width: 1,
      height: 1,
    },
  ],
};

const BuildContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ",
  images: [
    {
      src: require("./../assets/images/portfolio/braking/gear_small.jpg"),
      width: 1,
      height: 1,
    },  
    {
      src: require("./../assets/images/portfolio/braking/axle_rework.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/braking/wheelBuildCropped.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/braking/kiosk_unfinished.jpg"),
      width: 1,
      height: 1,
    },    
  ],
};

const DeployContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat.",
  images: [
    {
      src: require("./../assets/images/portfolio/braking/kiosk.jpg"),
      width: 1,
      height: 1,
    },
    // {
    //   src: require("./../assets/images/portfolio/flux/deployImage1.jpg"),
    //   width: 2,
    //   height: 1,
    // },
    // {
    //   src: require("./../assets/images/portfolio/flux/deployImage2.jpg"),
    //   width: 1,
    //   height: 1,
    // },
    // {
    //   src: require("./../assets/images/portfolio/flux/deployImage3.jpg"),
    //   width: 1,
    //   height: 1,
    // },
    // {
    //   src: require("./../assets/images/portfolio/flux/deployImage4.jpg"),
    //   width: 3,
    //   height: 1,
    // },
  ],
};

const CaseStudyBraking = () => {
  return (
    <>
      <Intro {...IntroContent} />
      <FirstContact {...FirstContactContent} />
      <Design {...DesignContent} />
      <Build {...BuildContent} />
      <Deploy {...DeployContent} />
    </>
  );
};

export default CaseStudyBraking;
