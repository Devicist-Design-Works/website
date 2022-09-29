import React, { useState } from "react";
import Carousel from "react-images";
import buildIcon from "../../../assets/images/BuildIcon-white.svg";

const Build = (BuildContent) => {
  const [currentImage] = useState(0);

  return (
    <section>
      <div className="container-sm build">
        <div className="buildContent">
          <h3 className="reveal-from-bottom ">
            <img src={buildIcon} alt="build icon" width={40} className="mr-8" />
            Build
          </h3>
          {BuildContent.body}
        </div>

        <div className="reveal-from-bottom ft-l buildCarousel">
          <Carousel
            showNavigationOnTouchDevice={true}
            currentIndex={currentImage}
            views={BuildContent.images.map((x) => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title,
            }))}
            styles={{
              navigationNext: (base) => ({
                ...base,
                backgroundColor: "#000000B3",

                ":hover": {
                  backgroundColor: "#000000FF",
                },
                ":active": {
                  backgroundColor: "#FFFFFFB3",
                  transform: "translateY(2px)",
                },
              }),

              navigationPrev: (base) => ({
                ...base,
                backgroundColor: "#000000B3",

                ":hover": {
                  backgroundColor: "#000000FF",
                },
                ":active": {
                  backgroundColor: "#FFFFFFB3",
                  transform: "translateY(2px)",
                },
              }),
            }}
          />
        </div>
      </div>
      <div className="clearing"></div>
    </section>
  );
};

export default Build;
