import React, {useState, useCallback} from "react";

import SectionHeader from "./partials/SectionHeader";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import snowflake1 from '../../assets/images/portfolio/Snowflake/snowflake1.png';
import snowflake2 from "../../assets/images/portfolio/Snowflake/snowflake2.png";
import snowflake3 from "../../assets/images/portfolio/Snowflake/snowflake3.png";
import snowflake4 from "../../assets/images/portfolio/Snowflake/snowflake4.png";
import YoutubeEmbed from "../elements/YoutubeEmbed";

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

const Project1 = ()  => {

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
      'We developed interactive LED lighting for "Frost", a 30 foot touch-reactive sculpture on display at Brookfield Place in Toronto during the winter holidays.',
  };
  
  return (
    <section>
      <div className="container">
        <SectionHeader data={sectionHeader} className="center-content mt-32" />
        <div className="mb-16">
          <YoutubeEmbed embedId="mMHe-GRaYqA" />
        </div>
        <div className="gridWrapper">
          <Gallery photos={images} onClick={openLightbox} />
        </div>

        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
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

        <div className="carouselWrapper">
          <Carousel
            currentIndex={currentImage}
            views={images.map((x) => ({
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

export default Project1;
