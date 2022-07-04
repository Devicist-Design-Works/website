import React from "react";
import classNames from "classnames";
import bgWireframe from "../../../assets/images/wheelOutlineBG.png";


const Hero = () => {


  const outerClasses = classNames(
    "cs-hero section center-content"
  );

  const innerClasses = classNames(
    "hero-inner section-inner"
  );

  return (
    <section className={outerClasses}>
      <img
        alt="design wireframe background"
        src={bgWireframe}
        width={500}
        style={{ position: "absolute", opacity: "30%" }}
      />
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="cs-hero-content">
            <h3
              className="mt-16 mb-16 ta-l reveal-from-bottom"
              data-reveal-delay="200"
            >
              Case Study:
            </h3>
            <h1
              className="mt-0 mb-16 ta-l reveal-from-bottom"
              data-reveal-delay="200"
            >
              Regenerative Braking Kiosk
            </h1>
            <div className="container-s">
              <p
                className="m-0 mb-32 ta-l reveal-from-bottom"
                data-reveal-delay="400"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat.
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
