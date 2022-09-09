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
    "We designed and built a 50 foot kinetic installation for Shopify's Offices in Toronto. 40 metalic prisms are rotated in coordinated patterns to create rolling waves of refracted light.",
  imgSrc: require("./../assets/images/fluxOutline.png"),
  youtubeUrl: "u4LGvZfYVF0",
};

const FirstContactContent = {
  subject: "New Project",
  greeting: "Hi Nick",
  body: "Long time no chat! There's an an opp we have coming down the line that I think would be in your wheelhouse...As you walk down the main path, an overhead canopy creates waves and casts light, providing surprise and delight.",
};

const DesignContent = {
  body: "We created a set of mood boards drawing inspiration from other kinetic artworks and local lakes. We proposed a design that fit the parameters of the space, and fleshed it out into a detailed 3D model, and ultimately an animated simulation.",
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
  body: "A prototype of the rotating module was engineered, and distributed to the fabricator for testing and integration. We provided a report to the ESA for certification. We sourced and acquired parts and assembled the pieces into fully functional units, then we tested full rig remotely for weeks before deployment.",

  images: [
    {
      src: require("./../assets/images/portfolio/flux/1.jpg"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/flux/many_in_progress.jpg"),
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
  body: "The complete work refracts the ambient light of the room and to create shifting patterns that approximate the surface waves of a lake. Like a body of water it creates a calming atmosphere. It can draw in and transfix viewers, or it can melt into the background rather than demanding attention.",
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

const CaseStudyFlux = () => {
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

export default CaseStudyFlux;
