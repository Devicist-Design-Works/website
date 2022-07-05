import React, {useState, useCallback}from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import snowflake1 from "../../../assets/images/portfolio/Snowflake/snowflake1.png";
import snowflake2 from "../../../assets/images/portfolio/Snowflake/snowflake2.png";
import snowflake3 from "../../../assets/images/portfolio/Snowflake/snowflake3.png";
import snowflake4 from "../../../assets/images/portfolio/Snowflake/snowflake4.png";
import axle from"../../../assets/images/axleOutline.png";
import designIcon from "../../../assets/images/DesignIcon-white.svg"


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


const Design = () => {

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
      <div className="container-sm design">
        <div className="" style={{}}>
          <h3 className="reveal-from-bottom" data-reveal-delay="200">
            <img
              src={axle}
              alt="outline of axle design"
              width={175}
              className="ft-r ml-32 cs-bgImage"
            />
            <img
              src={designIcon}
              alt="design icon"
              width={40}
              className="mr-8"
            />
            Design
          </h3>
          <p className="reveal-from-bottom" data-reveal-delay="400">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat.
          </p>
        </div>
      </div>

      <div
        className=" container-sm cs-gridWrapper reveal-from-bottom"
        data-reveal-delay="600"
      >
        <Gallery photos={images} onClick={openLightbox} targetRowHeight={200} />
      </div>

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

      <div className="cs-carouselWrapper container-xs">
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
    </section>
  );
};

export default Design;
