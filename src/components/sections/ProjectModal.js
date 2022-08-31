import React, {useState, useCallback} from "react";

import SectionHeader from "./partials/SectionHeader";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import YoutubeEmbed from "../elements/YoutubeEmbed";


const ProjectModal = (ProjectModalContent) => {
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
    title: ProjectModalContent.title,
    paragraph: ProjectModalContent.body,
  };

  return (
    <section>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content mt-32" />
        <div className="projectVideo">
          <YoutubeEmbed embedId={ProjectModalContent.youtubeUrl} />
        </div>
        <div className="gridWrapper">
          <Gallery
            photos={ProjectModalContent.images}
            onClick={openLightbox}
            targetRowHeight={100}
          />
        </div>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                showNavigationOnTouchDevice={true}
                views={ProjectModalContent.images.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>

        <div className="carouselWrapper">
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={ProjectModalContent.images.map((x) => ({
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

export default ProjectModal;
