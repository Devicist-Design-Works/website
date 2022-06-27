import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import YoutubeEmbed from "../elements/YoutubeEmbed";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

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
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'The Process',
    paragraph: 'Our process is simple. The results stand-out.'
  };

  return (
    <section {...props} className={outerClasses} id="process">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/PrototypeIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Foundation</h3>
                <p className="m-0">
                  With over 20 years' experience combining art, UX, coding,
                  electronics, and fabrication, we use our skills to take wild
                  ideas and make them real, while mitigating risks.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/emailSketchCropped.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/DesignIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="mt-0 mb-12">Design</h3>
                <p className="m-0">
                  We work closely with clients to clarify objectives, and
                  iterate through research, ideation, sourcing, modeling and
                  detailing until we arrive at the optimal design.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/axle.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/PrototypeIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Build</h3>
                <p className="m-0">
                  We develop code, build electronics, fabricate objects, and
                  integrate components into the final pieces. Along the way, we
                  develop hands-on prototypes, simulations and tools that help
                  stakeholders sort out details.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/wheelBuild.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/BuildIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Deploy</h3>
                <p className="m-0">
                  Show time! This is the moment when the project goes live, and
                  public engagement begins. We are there to deliver and install
                  the project and ensure it is fully functional. We also study
                  the results to measure success.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <YoutubeEmbed embedId="o-eduqKUgx8" />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  <Image
                    src={require("./../../assets/images/SupportIcon-white.svg")}
                    alt="design icon"
                    width={50}
                    height={32}
                  />
                </div>
                <h3 className="mt-0 mb-12">Support</h3>
                <p className="m-0">
                  Obsessed with reliability, we engineer simple, robust and
                  modular solutions. We maintain the project over it's lifetime
                  through in-person and remote support, and can push updates to
                  keep the content fresh.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/support.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;