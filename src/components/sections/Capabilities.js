import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Capabilities = ({
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
    title: "Capabilities",
  };

  return (
    <section className={outerClasses} id="capabilities">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="capabilities-list">
            <ul>
              <li>Interaction Design</li>
              <li>Electronics</li>
              <li>Rapid Prototyping</li>
              <li>LED Displays</li>
              <li>Kinetic Displays</li>
              <li>Robotics</li>
              <li>Computer Vision</li>
              <li>Projection Mapping</li>
              <li>Apps and Software</li>
              <li>User Research</li>
              <li>User Metrics</li>
              <li>Simulation</li>
              <li>Installation</li>
              <li>Remote Monitoring</li>
            </ul>
          </div>
          <div className="capabilities-note">
            <p>* Additional services available with our partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

Capabilities.propTypes = propTypes;
Capabilities.defaultProps = defaultProps;

export default Capabilities;
