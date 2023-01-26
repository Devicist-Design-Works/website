import React, { useState, useCallback } from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import companyLogos from "./../../assets/images/companyLogos.png";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const OtherProjects = ({
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

  const gallery = {
    images: [
      {
        src: require("./../../assets/images/portfolio/more/more1.png"),
        width: 2,
        height: 1,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },
      {
        src: require("./../../assets/images/portfolio/more/more2.png"),
        width: 2,
        height: 1,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },
      {
        src: require("./../../assets/images/portfolio/more/more5.png"),
        width: 2,
        height: 2,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },
      {
        src: require("./../../assets/images/portfolio/more/more6.png"),
        width: 1,
        height: 1,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },
      {
        src: require("./../../assets/images/portfolio/more/more4.png"),
        width: 2,
        height: 1,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },

      {
        src: require("./../../assets/images/portfolio/more/more3.png"),
        width: 1,
        height: 1,
        //title:
        // "This is a caption description of what the image above depicts. Text would go here to give context about the details of this image",
      },
    ],
  };

  return (
    <section id="work">
      <div className="container-sm reveal-from-bottom">
        <br />
        <h3 className="ta-c">And Many More</h3>
        <img src={companyLogos} alt="Company Logos" className="mt-32" />
        <div className=" container-sm cs-gridWrapper reveal-from-bottom">
          <Gallery
            photos={gallery.images}
            onClick={openLightbox}
            targetRowHeight={160}
            margin={6}
          />
        </div>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                showNavigationOnTouchDevice={true}
                views={gallery.images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className="cs-carouselWrapper container-xs">
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={gallery.images.map((x) => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title,
            }))}
          />
        </div>
      </div>
    </section>
  );
};

OtherProjects.propTypes = propTypes;
OtherProjects.defaultProps = defaultProps;

export default OtherProjects;
