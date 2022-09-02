import React from 'react';
// import sections
import Intro from '../components/sections/CaseStudy/Intro';
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";

const IntroContent = {
  title: "Regenerative Braking Demo",
  description: "In order to profile KIA's regenerative braking technology, we developed a working demo of the system. Users pressed an accelerator pedal to drive a full size car wheel mounted in the kiosk. Pressing the brake both stopped the wheel and recharged the battery represented on the vivrtual dashboard.",
  imgSrc: require("./../assets/images/wheelOutlineBG.png"),
};

const FirstContactContent = {
  subject: "Project Proposal",
  greeting: "Hi Nick",
  body: "It keeps coming...KIA is looking to create an experience to demonstrate regenerative braking. Idea is that a wheel spins and you press a brake pedal which stops it and watch as a battery display lights up, showing you're braking. Timeline: 6 weeks."
}

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
      src: require("./../assets/images/portfolio/braking/braking3.png"),
      width: 1,
      height: 1,
    },
  ],
};

const BuildContent = {
  body: "Some Words. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodoconsequat. Duis autem vel eum iriure dolor in hendrerit in vulputatevelit esse molestie consequat.",
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
      src: require("./../assets/images/portfolio/braking/braking3.png"),
      width: 1,
      height: 1,
    },
  ],
};

const DeployContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat.",
  youtubeUrl: "o-eduqKUgx8",
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
}

export default CaseStudyBraking;