import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
//import Image from "../elements/Image";
import Card from 'react-bootstrap/Card';
//import Modal from 'react-bootstrap/Modal';
import Button from '../elements/Button';
import snowflake from '../../assets/images/portfolio/snowflake.png';
import powercube from "../../assets/images/portfolio/powercube.png";
import nfc from "../../assets/images/portfolio/nfc.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import PortfolioMore from '../layout/partials/PortfolioMore';
import Project1 from './Project1';
//import { TRUE } from 'sass';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}



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
    'portfolio section',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'portfolio-inner section-inner',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );
  
  //edit section header content here
  const sectionHeader = {
    title: 'Examples',
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
  }
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
    <section {...props} className={outerClasses} id="work">
      <div className="container">
        <div className={innerClasses}>
          {/*this is a seperate .js file found in sections > partials*/}
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={snowflake} />
                <Card.Body>
                  <Card.Title>Frost : Case Study</Card.Title>
                  <Card.Text>
                    We developed interactive LED lighting for "Frost", a 30 foot
                    touch-reactive sculpture on display at Brookfield Place in
                    Toronto during the winter holidays.
                  </Card.Text>

                  <Button onClick={onOpenModalP1} variant="primary">
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={powercube} />
                <Card.Body>
                  <Card.Title>Powercube</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Button variant="primary" onClick={onOpenModalP2}>
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={nfc} />
                <Card.Body>
                  <Card.Title>NFC System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Button variant="primary" onClick={onOpenModalP3}>
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <p />
          {/* <PortfolioMore/> */}
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
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <Project1 />
      </Modal>
      <Modal
        open={openP2}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: "projectModal",
          overlay: "projectOverlay",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <Project1 />
      </Modal>
      <Modal
        open={openP3}
        onClose={onCloseModal}
        center
        closeIcon={closeIcon}
        classNames={{
          modal: "projectModal",
          overlay: "projectOverlay",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <Project1 />
      </Modal>
    </section>
  );

  
}





Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;