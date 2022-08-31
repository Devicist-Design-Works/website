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
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    // topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <video className="videoBg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
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
                From hand-held gadgets
                <br />
                to large-scale installations, <br />
                we combine art and engineering <br />
                to build dynamic in-person <br />
                experiences.
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
