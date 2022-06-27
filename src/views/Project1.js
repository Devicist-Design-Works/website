import React, {useState, useCallback} from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../utils/SectionProps";
import SectionHeader from "../components/sections/partials/SectionHeader";
import Image from "../components/elements/Image";
import { Link, useHistory } from "react-router-dom";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import snowflake1 from '../assets/images/portfolio/Snowflake/snowflake1.png';
import snowflake2 from "../assets/images/portfolio/Snowflake/snowflake2.png";
import snowflake3 from "../assets/images/portfolio/Snowflake/snowflake3.png";
import snowflake4 from "../assets/images/portfolio/Snowflake/snowflake4.png";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const images = [
  {
    src: snowflake1,
    width: 1,
    height: 1,
  },
  {
    src: snowflake2,
    width: 1,
    height: 1,
  },
  {
    src: snowflake3,
    width: 1,
    height: 1,
  },
  {
    src: snowflake4,
    width: 1,
    height: 1,
  },
];





const Project1 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
})  => {
  const outerClasses = classNames(
    className
  );

  const innerClasses = classNames(

  );

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const sectionHeader = {
    title: "Snowflake Installation",
    paragraph:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };
  const history = useHistory();
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <Link onClick={() => history.goBack()}>
            <Image
              src={require("../assets/images/backArrow.svg")}
              alt="design icon"
              width={40}
              height={32}
            />
          </Link>

          <SectionHeader
            data={sectionHeader}
            className="center-content mt-32"
          />

          <Gallery photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  className="center-content"
                  currentIndex={currentImage}
                  views={images.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </section>
  );
};

Project1.propTypes = propTypes;
Project1.defaultProps = defaultProps;

export default Project1;
