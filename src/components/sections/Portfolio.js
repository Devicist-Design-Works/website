import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../elements/Button";
import flux from "./../../assets/images/fluxCover.png";
import wheel from "../../assets/images/brakingCover.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//import PortfolioMore from '../layout/partials/PortfolioMore';
import ProjectModal from "./ProjectModal";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Portfolio = ({
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

  const tilesClasses = classNames(
    "center-content mt-16 container",
    pushLeft && "push-left"
  );

  const Project1ModalContent = {
    title: "Frost",
    body: "We developed interactive LED lighting for F-Minus studio's 30 foot sculpture. A large illuminated snowflake occupies the atrium of Brookfield Place in Toronto. Viewer's touch causes the colors to shift",
    youtubeUrl: "mMHe-GRaYqA",
    images: [
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake1.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake2.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake3.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake4.png"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project2ModalContent = {
    title: "Regenerative Braking Demo",
    body: "To profile KIA's regenerative braking technology, we developed a working demo. Users press an accelerator pedal to drive a full size car wheel mounted in a kiosk. The brake both stops the wheel and recharges the battery represented on the virtual dashboard.",
    youtubeUrl: "o-eduqKUgx8",
    images: [
      {
        src: require("./../../assets/images/portfolio/braking/emailSketch.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/braking3.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/wheelBuild2cropped.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/braking/wheelBuild.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project3ModalContent = {
    title: "NFC",
    body: "We built 30 networked NFC scanning stations for Intel at MWC. Visitors scan wristbands to collect coins that unlock prizes in a video game, a fun way to collect information about interests.",
    youtubeUrl: "mMHe-GRaYqA",
    images: [
      {
        src: require("./../../assets/images/portfolio/nfc/feature_nfc_cropped.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/nfc/booth_cropped.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/nfc/register_cropped.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/nfc/feature_nfc2_cropped.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  //edit section header content here
  const sectionHeader = {
    title: "Case Study",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  const subHeader = {
    title: "More Projects",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  const [openP1, setOpenP1] = useState(false);
  const [openP2, setOpenP2] = useState(false);
  const [openP3, setOpenP3] = useState(false);

  const onOpenModalP1 = () => setOpenP1(true);
  const onOpenModalP2 = () => setOpenP2(true);
  const onOpenModalP3 = () => setOpenP3(true);
  const onCloseModal = () => {
    setOpenP1(false);
    setOpenP2(false);
    setOpenP3(false);
  };
  const closeIcon = (
    <svg
      fill="#FFFFFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
    </svg>
  );

  return (
    <section id="work">
      <div className={innerClasses}>
        <div className="container">
          {/*this is a seperate .js file found in sections > partials*/}
          <SectionHeader data={sectionHeader} className="center-content" />

          <Link to="/CaseStudyFlux">
            <div className="reveal-from-bottom">
              <Card className="bg-dark" style={{ width: "100%" }}>
                <Card.Img src={flux} alt="Flux Cover Image" />
                <Card.ImgOverlay className=" d-flex flex-column">
                  <Card.Title className="mt-auto caseStudyTitle">
                    Flux
                  </Card.Title>
                  <Card.Text className="caseStudyText">
                    A large kinetic installation for Shopify. 40 metalic prisms
                    are rotated in coordinated patterns to create waves of
                    refracted light.
                  </Card.Text>
                  <Link to="/CaseStudyFlux">
                    <Button
                      className="caseStudyButton"
                      variant="primary"
                      onClick={onOpenModalP2}
                    >
                      Learn more
                    </Button>
                  </Link>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Link>

          <Link to="/CaseStudyBraking">
            <div className="reveal-from-bottom mt-32">
              <Card className="bg-dark" style={{ width: "100%" }}>
                <Card.Img src={wheel} alt="Flux Cover Image" />
                <Card.ImgOverlay className=" d-flex flex-column">
                  <Card.Title className="mt-auto caseStudyTitle">
                    Braking Demo
                  </Card.Title>
                  <Card.Text className="caseStudyText">
                    Created for KIA, car pedals control the wheel while
                    battery-level is displayed on a simulated dashboard.
                  </Card.Text>
                  <Link to="/CaseStudyBraking">
                    <Button
                      className="caseStudyButton"
                      variant="primary"
                      onClick={onOpenModalP2}
                    >
                      Learn more
                    </Button>
                  </Link>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Link>

          <SectionHeader
            data={subHeader}
            className="center-content pb-0 mt-32"
          />
          <div className={tilesClasses}>
            <div className="reveal-from-right projectCard">
            <Card className="bg-black ">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP1}
                >
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/portfolio/Snowflake/snowflake1.png")}
                  />

                  <Card.Body>
                    <Card.Title>Frost</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>

            <div className="reveal-from-bottom projectCard">
              <Card className="bg-black ">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP2}
                >
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/portfolio/braking/wheelBuild.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Braking</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>

            <div className="reveal-from-left projectCard">
              <Card className="bg-black ">
                <button
                  className="projectButton border-0"
                  onClick={onOpenModalP3}
                >
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/portfolio/nfc/feature_nfc_cropped.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Scanners</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>

            <Modal
              open={openP1}
              onClose={onCloseModal}
              center
              closeIcon={closeIcon}
              classNames={{
                modal: "projectModal",
                overlay: "projectOverlay",
                // modalAnimationIn: "customEnterModalAnimation",
                // modalAnimationOut: "customLeaveModalAnimation",
              }}
              animationDuration={800}
            >
              <ProjectModal {...Project1ModalContent} />
            </Modal>
            <Modal
              open={openP2}
              onClose={onCloseModal}
              center
              closeIcon={closeIcon}
              classNames={{
                modal: "projectModal",
                overlay: "projectOverlay",
                // modalAnimationIn: "customEnterModalAnimation",
                //modalAnimationOut: "customLeaveModalAnimation",
              }}
              animationDuration={800}
            >
              <ProjectModal {...Project2ModalContent} />
            </Modal>
            <Modal
              open={openP3}
              onClose={onCloseModal}
              center
              closeIcon={closeIcon}
              classNames={{
                modal: "projectModal",
                overlay: "projectOverlay",
                //modalAnimationIn: "customEnterModalAnimation",
                //modalAnimationOut: "customLeaveModalAnimation",
              }}
              animationDuration={800}
            >
              <ProjectModal {...Project3ModalContent} />
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
