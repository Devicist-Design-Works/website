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
    "To promote KIA's regenerative braking technology, we developed an interactive demo. The accelerator pedal drives the car wheel. The brake both stops the wheel and recharges the virtual battery displayed on the dashboard.",
  imgSrc: require("./../assets/images/wheelOutlineBG.png"),
  videoUrl: "https://www.youtube.com/embed/o-eduqKUgx8",
};

const FirstContactContent = {
  subject: "Project Proposal",
  greeting: "Hi Guys",
  body: "It keeps coming...KIA is looking to create an experience to demonstrate regenerative braking. Idea is that a wheel spins and you press a brake pedal which stops it and watch as a battery display lights up, showing you're braking. We have 6 weeks.",
};

const DesignContent = {
  body: "We researched a variety of approaches. Building from scratch was optimal. We developed a simulation to help the client decide on the top speed. We sourced components to handle the weight and forces, and created a detailed 3D model to distribute to stakeholders.",
  bgImage: require("./../assets/images/axleOutline.png"),
  images: [
    {
      src: require("./../assets/images/portfolio/braking/emailSketch.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/braking/wheel_sim.gif"),
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
  body: "Acquiring the parts, we fabricated the mechanisms. We coded and tested the interaction for hours on end. We delivered our work several weeks early to be integrated into the kiosk cabinet.",
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
  body: "The kiosk went on tour at Auto Shows across Canada in 2019, and held up to thousands of uses without downtime. Pleased, KIA redeployed the activation for a second year, and engaged us to add interactive lighting to the experience.",
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
