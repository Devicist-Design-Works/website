import React, { useState } from "react";
import Carousel from "react-images";
import buildIcon from "../../../assets/images/PrototypeIcon-white.svg";




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
          <p className="ta-l reveal-from-bottom">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat.
          </p>
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
          />
        </div>
      </div>
      <div className="clearing"></div>
    </section>
  );
};

export default Build;
