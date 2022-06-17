import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import videoBg from "../../assets/videos/videoBg.mp4";
import Image from "../elements/Image";


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const videoBgStyle = {
  position: "fixed",
  width: "100%", 
  height: "100%",
  };

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div style={{ padding: 30 }}>
            <Image
              src={require("./../../assets/images/logo.svg")}
              alt="Open"
              width={200}
              height={32}
            />
          </div>

          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              The built world brought to life
            </h1>
            <div className="container-s">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Whether it's a reactive LED light show, a custom game
                controller, a kinetic sculpture, or anything in between. We can
                make it happen!
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
        </div>
      </div>
      <video
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "-1",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
        id="videoBg"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
