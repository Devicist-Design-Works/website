import React, { useState } from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const innerClasses = classNames(
    "portfolio-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  //edit section header content here
  const sectionHeader = {
    title: "About Us",
    paragraph:
      "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
  };

  const tilesClasses = classNames("tiles-wrap ", pushLeft && "push-left");

  return (
    <section id="about">
      <div className={innerClasses}>
        <div className="container aboutSection">
          {/*this is a seperate .js file found in sections > partials*/}
          <SectionHeader
            data={sectionHeader}
            className="center-content mt-32"
          />

          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 about-name">
                  <Image
                    src={require("./../../assets/images/about/nickHeadshot.jpg")}
                    alt="Nick Headshot"
                    width={180}
                    className="headshot"
                  />
                  Nick Stedman
                </h4>
                <p className="mb-12 text-md about-title">Founder </p>
                <p className="m-0 text-sm">
                  Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                  semper quis lectus nulla at volutpat diam ut venenatis
                  tellus—in ornare.
                </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 about-name">
                  <Image
                    src={require("./../../assets/images/about/devlinHeadshot.jpg")}
                    alt="Devlin Headshot"
                    width={180}
                    className="headshot"
                  />
                  Devlin Macpherson
                </h4>
                <p className="mb-12 text-md about-title">Technologist </p>
                <p className="m-0 text-sm">
                  Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                  semper quis lectus nulla at volutpat diam ut venenatis
                  tellus—in ornare.
                </p>
              </div>
            </div>
          </div>

          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom ">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"></div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-32 center-content">Associates</h3>
                  <h4 className="mt-0 mb-8">First Last</h4>
                  <p className="mb-32 text-sm">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                  </p>

                  <h4 className="mt-0 mb-8">First Last</h4>
                  <p className="m-0 text-sm">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom ">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16"></div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="mt-0 mb-32 center-content">Partners</h3>
                  <Image
                    src={require("./../../assets/images/about/taylorLogo.png")}
                    alt="Taylor Logo"
                    width={100}
                  />
                  <p className="mb-32 text-sm">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                  </p>

                  <Image
                    src={require("./../../assets/images/about/globacoreLogo.png")}
                    alt="Globacore Logo"
                    width={200}
                  />
                  <p className="m-0 text-sm">
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis semper quis lectus nulla at volutpat diam ut venenatis
                    tellus—in ornare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
