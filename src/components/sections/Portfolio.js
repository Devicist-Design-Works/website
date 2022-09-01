import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../elements/Button";
import flux from "./../../assets/images/fluxCover.png";
import wheel from "../../assets/images/wheelBuild.jpg";
import nfc from "./../../assets/images/portfolio/nfc.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
//import PortfolioMore from '../layout/partials/PortfolioMore';
import ProjectModal from "./ProjectModal";
import { CardGroup } from "react-bootstrap";

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
  const outerClasses = classNames(
    "portfolio section",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "portfolio-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const Project1ModalContent = {
    title: "Project 1",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    youtubeUrl: "mMHe-GRaYqA",
    images: [
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project2ModalContent = {
    title: "Project 2",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    youtubeUrl: "mMHe-GRaYqA",
    images: [
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project3ModalContent = {
    title: "Project 3",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    youtubeUrl: "mMHe-GRaYqA",
    images: [
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/placeholder.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  //edit section header content here
  const sectionHeader = {
    title: "Our Work",
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

          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right">
              <Card style={{ width: "16rem"}}>
                <Card.Img variant="top" src={flux}/>
                <Card.Body>
                  <Card.Title>
                    Flux
                  </Card.Title>
                  <Card.Text>
                    A large kinetic installation for Shopify. 40 metalic prisms are rotated in coordinated patterns to create waves of refracted light.
                  </Card.Text>
                  <Link to="/CaseStudyFlux">
                    <Button variant="primary" onClick={onOpenModalP2}>
                      Learn more
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={wheel} />
                <Card.Body>
                  <Card.Title>
                    Regenerative Braking Demo
                  </Card.Title>
                  <Card.Text>
                    Created for KIA, car pedals control the wheel while battery-level is displayed on a simulated dashboard.
                  </Card.Text>
                  <Link to="/CaseStudyBraking">
                    <Button variant="primary">Learn more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className={tilesClasses}>
            <div className="reveal-from-right projectCard">
              <Card>
                <button className="projectButton" onClick={onOpenModalP1}>
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/placeholder.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>

            <div className="reveal-from-bottom projectCard">
              <Card>
                <button className="projectButton" onClick={onOpenModalP2}>
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/placeholder.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>

            <div className="reveal-from-left projectCard">
              <Card>
                <button className="projectButton" onClick={onOpenModalP3}>
                  <Card.Img
                    variant="top"
                    src={require("./../../assets/images/placeholder.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                  </Card.Body>
                </button>
              </Card>
            </div>
          </div>
        </div>
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
    </section>
  );
};

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
