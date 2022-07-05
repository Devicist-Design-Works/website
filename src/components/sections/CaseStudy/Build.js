import React, { useState, useCallback } from "react";
import classNames from "classnames";
import Carousel, { Modal, ModalGateway } from "react-images";
import buildIcon from "../../../assets/images/PrototypeIcon-white.svg";
import snowflake1 from "../../../assets/images/portfolio/Snowflake/snowflake1.png";
import snowflake2 from "../../../assets/images/portfolio/Snowflake/snowflake2.png";
import snowflake3 from "../../../assets/images/portfolio/Snowflake/snowflake3.png";
import snowflake4 from "../../../assets/images/portfolio/Snowflake/snowflake4.png";

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

const Build = () => {
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

  return (
    <section>
      <div className="container-sm build">
        <div className="buildContent">
          <h3 className="reveal-from-bottom " data-reveal-delay="200">
            <img src={buildIcon} alt="build icon" width={40} className="mr-8" />
            Build
          </h3>
          <p className="ta-l reveal-from-bottom" data-reveal-delay="400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat.
          </p>
        </div>

        <div
          className="reveal-from-bottom ft-l buildCarousel "
          data-reveal-delay="400"
        >
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  showNavigationOnTouchDevice={true}
                  views={images.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={images.map((x) => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title,
            }))}
          />
        </div>
      </div>
      <div class="clearing"></div>
    </section>
  );
};

export default Build;
