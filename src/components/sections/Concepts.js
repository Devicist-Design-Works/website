import React, { useState } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "../elements/Button";
import flux from "./../../assets/images/portfolio/fluxCoverNew.mp4";
// import wheel from "../../assets/images/portfolio/braking/brakingCsCover.png";
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

const Concepts = ({
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
    body: "We developed interactive LED lighting for studio F-Minus' 30 foot holiday sculpture. A large illuminated snowflake occupies the atrium of Brookfield Place in Toronto. Touching the surface causes the colors to shift",
    videoUrl: "https://www.youtube.com/embed/cyy3FVcJ6sU",
    images: [
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake1.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake2.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/inShop.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/Snowflake/snowflake4.jpg"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project2ModalContent = {
    title: "Shoe Box",
    body: "A concept of a display shoe box designed as part of a promotional package for a new release.",
    videoUrl: "https://www.youtube.com/embed/Dm9ksx5k4pc",
    images: [
      {
        src: require("./../../assets/images/concepts/shoeBox/1.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/shoeBox/2.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/shoeBox/3.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/shoeBox/4.png"),
        width: 1,
        height: 1,
      },
    ],
  };

  const Project3ModalContent = {
    title: "Light Bars",
    body: "Bring life to a room with dynamic, beautiful, customizable Light Bars. We leverage established and robust LED technology to deliver a simple, stunning solution that can fit into any space large or small",
    videoUrl: "https://www.youtube.com/embed/Wboz4RVvzoQ",
    images: [
      {
        src: require("./../../assets/images/concepts/lightBars/1.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/lightBars/2.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/lightBars/3.png"),
        width: 1,
        height: 1,
      },
      {
        src: require("./../../assets/images/concepts/lightBars/4.png"),
        width: 1,
        height: 1,
      },
    ],
  };

  const MoreProjects = {
    images: [
      {
        src: require("./../../assets/images/portfolio/more/more1.png"),
        width: 1.5,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/more/more2.png"),
        width: 2,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/more/more6.png"),
        width: 2,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/more/more4.png"),
        width: 2.5,
        height: 1,
      },
      {
        src: require("./../../assets/images/portfolio/more/more5.png"),
        width: 1.5,
        height: 1,
      },

      {
        src: require("./../../assets/images/portfolio/more/more3.png"),
        width: 1.5,
        height: 1,
      },
    ],
  };

  //edit section header content here
  const sectionHeader = {
    title: "Concepts",
    paragraph: "These are ideas are currently in development and could be adapted to any space or project. "
  };

  const subHeader = {
    title: "More Projects",
    // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  // const subSubHeader = {
  //   title: "And Many More",
  //   // paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  // };

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
      width="50px"
      height="50px"
      className="modal-close-icon"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
    </svg>
  );

  return (
    <section id="concepts">
      <div className={innerClasses}>
        <div className="container">
          {/*this is a seperate .js file found in sections > partials*/}
          <SectionHeader
            data={sectionHeader}
            className="center-content"
          />

          <div className={tilesClasses}>
            <div className="reveal-from-right projectGrid">
              <button
                className="projectButton border-0"
                onClick={onOpenModalP3}
              >
                <Card className="bg-black projectCard">
                  <Card.Img
                    className="tintMinor"
                    src={require("./../../assets/images/concepts/ledCover.png")}
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Card.Title className="projectTitle">Light Bars</Card.Title>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </button>
            </div>

            <div className="reveal-from-left projectGrid">
              <button
                className="projectButton border-0"
                onClick={onOpenModalP2}
              >
                <Card className="bg-black projectCard ">
                  <Card.Img
                    className="tintMajor"
                    src={require("./../../assets/images/concepts/boxCover.png")}
                  />
                  <Card.ImgOverlay>
                    <Card.Body>
                      <Card.Title className="projectTitle">Shoe Box</Card.Title>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
              </button>
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

Concepts.propTypes = propTypes;
Concepts.defaultProps = defaultProps;

export default Concepts;
