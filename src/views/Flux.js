import React from "react";
// import sections
import Intro from "../components/sections/CaseStudy/Intro";
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";

const IntroContent = {
  title: "Flux",
  description:
    "We designed and built a 40 foot kinetic installation for Shopify's Offices in Toronto. Metallic prisms are rotated in coordinated patterns to create rolling waves of refracted light.",
  imgSrc: require("./../assets/images/fluxOutline.png"),
  videoUrl: "https://www.youtube.com/embed/Z2o9WQWpmp4",
};

const FirstContactContent = {
  subject: "Shopify Ceiling",
  greeting: "Hi Guys,",
  body: "There's an opportunity that would be in your wheelhouse...As you walk down the main path, an overhead canopy creates waves and casts light, providing surprise and delight.",
};

const DesignContent = {
  body: "Inspired by kinetic artworks and local lakes, we proposed a design to fill out the long and low ceiling, and detailed it into a 3D model and an animated simulation.",
  bgImage: require("./../assets/images/portfolio/flux/prismGraphic.png"),
  images: [
    {
      src: require("./../assets/images/portfolio/flux/16.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/14b.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/ceilingSim.gif"),
      width: 1,
      height: 1,
    },
  ],
};

const BuildContent = {
  body: "Prototypes of the rotating module were engineered, and distributed to stakeholders. A report was provided for ESA certification. Parts were sourced and assembled into the full rig and tested for weeks before deployment.",

  images: [
    {
      src: require("./../assets/images/portfolio/flux/many_in_progress.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/1.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/prism_prototype.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/8.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/6.jpg"),
      width: 1,
      height: 1,
    },
  ],
};

const DeployContent = {
  body: "The complete work refracts ambient light in rolling wave patterns. Like a lake, viewers can be transfixed by the rhythms, or it can melt into the background.",
  images: [
    {
      src: require("./../assets/images/portfolio/flux/deployImage1.jpg"),
      width: 2,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage2.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage3.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/deployImage4.jpg"),
      width: 3,
      height: 1,
    },
  ],
};

const Flux = () => {
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

export default Flux;
