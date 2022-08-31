import React from "react";
// import sections
import Intro from "../components/sections/CaseStudy/Intro";
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";

const IntroContent = {
  title: "Spinning Units",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
  imgSrc: require("./../assets/images/fluxOutline.png"),
  youtubeUrl: "u4LGvZfYVF0",
};

const FirstContactContent = {
  subject: "Project Proposal",
  greeting: "Hi Nick",
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodoconsequat. Duis autem vel eum iriure dolor in hendrerit in vulputatevelit esse molestie consequat.",
};

const DesignContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodoconsequat. Duis autem vel eum iriure dolor in hendrerit in vulputatevelit esse molestie consequat.",
  bgImage: require("./../assets/images/axleOutline.png"),
  images: [
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake1.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake2.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake3.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake4.png"),
      width: 1,
      height: 1,
    },
  ],
};

const BuildContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tationullamcorper suscipit lobortis nisl ut aliquip ex ea commodoconsequat. Duis autem vel eum iriure dolor in hendrerit in vulputatevelit esse molestie consequat.",
  images: [
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake1.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake2.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake3.png"),
      width: 1,
      height: 1,
    },
    {
      src: require("./../assets/images/portfolio/Snowflake/snowflake4.png"),
      width: 1,
      height: 1,
    },
  ],
};

const DeployContent = {
  body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvolutpat.",
  youtubeUrl: "o-eduqKUgx8",
};

const CaseStudyFrost = () => {
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

export default CaseStudyFrost;
