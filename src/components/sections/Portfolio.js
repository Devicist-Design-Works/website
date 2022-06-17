import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from "../elements/Image";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from '../elements/Button';
import snowflake from '../../assets/images/portfolio/snowflake.png';
import powercube from "../../assets/images/portfolio/powercube.png";
import nfc from "../../assets/images/portfolio/nfc.png";
import { TRUE } from 'sass';


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
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'portfolio-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Work',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };


  return (
    <section id="portfolio" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={snowflake} />
                <Card.Body>
                  <Card.Title>Snowflake</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a
                    href="https://hackaday.io/project/3431-christmas-snowflake-sculpture"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
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
                  <a
                    href="https://hackaday.io/project/16727-powercube-vr"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
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

                  <a
                    href="https://hackaday.io/project/5483-nfc-scanners"
                    target="_blank"
                  >
                    <Button variant="primary">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  
}





Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;