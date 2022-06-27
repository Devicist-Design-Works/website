import React from 'react';
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
import PortfolioMore from '../layout/partials/PortfolioMore';
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


  return (
    <section {...props} className={outerClasses}>
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
                  We developed interactive LED lighting for "Frost", a 30 foot touch-reactive sculpture on display at Brookfield Place in Toronto during the winter holidays. 
                  </Card.Text>
                  <Link
                    to="/Project1"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <Button variant="primary">Learn more</Button>
                  </Link>
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
                  <Link
                    to="/Project2"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <Button variant="primary">Learn more</Button>
                  </Link>
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

                  <Link
                    to="/Project3"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    <Button variant="primary">Learn more</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <p/>
          {/* <PortfolioMore/> */}
        </div>
      </div>
    </section>
  );

  
}





Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;