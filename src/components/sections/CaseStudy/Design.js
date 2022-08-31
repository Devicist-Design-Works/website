import React, {useState, useCallback}from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import designIcon from "../../../assets/images/DesignIcon-white.svg"



const Design = (DesignContent) => {

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
          <h3 className="reveal-from-bottom">
            <img
              src={DesignContent.bgImage}
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
          <p className="reveal-from-bottom">
            {DesignContent.body}
            {DesignContent.image1}
          </p>
        </div>
      </div>

      <div className=" container-sm cs-gridWrapper reveal-from-bottom">
        <Gallery
          photos={DesignContent.images}
          onClick={openLightbox}
          targetRowHeight={200}
        />
      </div>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              showNavigationOnTouchDevice={true}
              views={DesignContent.images.map((x) => ({
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
          views={DesignContent.images.map((x) => ({
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
