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
    title: "PowerCube VR",
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
    title: "Grapple",
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
    title: "Case Studies",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  const subHeader = {
    title: "Projects",
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
                  <Card.Title className="mt-auto">
                    <h2 className="mb-0">Flux</h2>
                  </Card.Title>
                  <Card.Text>
                    A large kinetic installation for Shopify. 40 metalic prisms
                    are rotated in coordinated patterns to create waves of
                    refracted light.
                  </Card.Text>
                  <Link to="/CaseStudyFlux">
                    <Button variant="primary" onClick={onOpenModalP2}>
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
                  <Card.Title className="mt-auto">
                    <h2 className="mb-0">Regenerative Braking Demo</h2>
                  </Card.Title>
                  <Card.Text>
                    Created for KIA, car pedals control the wheel while
                    battery-level is displayed on a simulated dashboard.
                  </Card.Text>
                  <Link to="/CaseStudyBraking">
                    <Button variant="primary" onClick={onOpenModalP2}>
                      Learn more
                    </Button>
                  </Link>
                </Card.ImgOverlay>
              </Card>
            </div>
          </Link>

          <SectionHeader
            data={subHeader}
            className="center-content mt-64 pb-0"
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
                    src={require("./../../assets/images/placeholder.jpg")}
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
                    src={require("./../../assets/images/placeholder.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>PowerCube VR</Card.Title>
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
                    src={require("./../../assets/images/placeholder.jpg")}
                  />

                  <Card.Body>
                    <Card.Title>Grapple</Card.Title>
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
