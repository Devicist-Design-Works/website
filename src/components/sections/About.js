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
                    src={require("./../../assets/images/placeholderHeadshot.jpg")}
                    alt="Nick Headshot"
                    width={120}
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
                    src={require("./../../assets/images/placeholderHeadshot.jpg")}
                    alt="Devlin Headshot"
                    width={120}
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

            <div className="tiles-item reveal-from-bottom">
              <div className="features-tiles-item-content">
                <h3 className="mt-64 mb-32 center-content">Associates</h3>
                <h4 className="mt-0 mb-8 about-name">
                  <Image
                    src={require("./../../assets/images/placeholderHeadshot.jpg")}
                    alt="Headshot"
                    width={120}
                    className="headshot"
                  />
                  Firstname Lastname
                </h4>

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
                    src={require("./../../assets/images/placeholderHeadshot.jpg")}
                    alt="Headshot"
                    width={120}
                    className="headshot"
                  />
                  Firstname Lastname
                </h4>

                <p className="m-0 text-sm">
                  Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
                  semper quis lectus nulla at volutpat diam ut venenatis
                  tellus—in ornare.
                </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="features-tiles-item-content center-content">
                <h3 className="mt-64 mb-32 center-content">Partners</h3>

                <Image
                  src={require("./../../assets/images/about/taylorLogo.png")}
                  alt="Taylor logo"
                  width={250}
                  className="p-32"
                />
                <Image
                  src={require("./../../assets/images/about/globacoreLogo.png")}
                  alt="Globacore Logo"
                  width={300}
                  className="p-32"
                />

                <Image
                  src={require("./../../assets/images/about/sdiLogo.png")}
                  alt="SDI logo"
                  width={150}
                  className="p-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
