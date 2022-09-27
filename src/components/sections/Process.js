import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "The Process",
    // paragraph: "We",
  };

  return (
    <section className={outerClasses} id="process">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <VerticalTimeline lineColor="#adb5bd8f">
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/FoundationIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Foundation</h3>
              <p>
                20+ years building interactive exhibits. We take big ideas and
                make them tangible, while mitigating risks.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/DesignIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Design</h3>
              <p>
                We research, ideate, source, model and detail until the optimal
                design is reached.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/BuildIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Build</h3>
              <p>
                We develop code, electronics, and mechanisms. We fabricate and
                integrate components to completion. We build prototypes,
                simulations and tools for stakeholders.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/DeployIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Deploy</h3>
              <p>
                Show time! We deliver and install the project ensuring it
                surpasses expectations. Throughout the event, we can collect
                user metrics to measure results.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="timeline-element"
              contentStyle={{
                background: "none",
                color: "#fff",
                borderRadius: "0px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "none",
                background: "none",
              }}
              iconStyle={{
                background: "#000",
                color: "#fff",
                boxShadow: "none",
                height: " 90px",
                top: "60px",
              }}
              icon={
                <img
                  src={require("./../../assets/images/SupportIcon-white.svg")}
                  alt="design icon"
                  width="60px"
                  className="mt-12 processIcon"
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Support</h3>
              <p>
                Obsessed with reliability, we engineer simple, robust and
                modular solutions. We maintain the project over it's lifetime
                through in-person and remote support, and can push updates to
                keep the content fresh.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <div className="center-content mb-64">
          <h2> Testimonials</h2>
          <div className="testimonial reveal-from-right">
            <h1 className="m-0 ta-l">"</h1>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
            <h1 className="m-0 ta-r">"</h1>
          </div>

          <div className="testimonial reveal-from-bottom">
            <h1 className="m-0 ta-l">"</h1>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
            <h1 className="m-0 ta-r">"</h1>
          </div>
          <div className="testimonial reveal-from-left">
            <h1 className="m-0 ta-l">"</h1>
            <p>
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
            <h1 className="m-0 ta-r">"</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
