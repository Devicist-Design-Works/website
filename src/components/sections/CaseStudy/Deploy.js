import React, { useState, useCallback } from "react";
import classNames from "classnames";
import deployIcon from "../../../assets/images/BuildIcon-white.svg";
import YoutubeEmbed from "../../elements/YoutubeEmbed";

const Deploy = () => {


  return (
    <section>
      <div className="container-sm deploy reveal-from-bottom">
        <h3 className="reveal-from-bottom ta-l mt-64" data-reveal-delay="200">
          <img src={deployIcon} alt="build icon" width={40} className="mr-8" />
          Deploy
        </h3>
        <p className="ta-l reveal-from-bottom" data-reveal-delay="400">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam.
        </p>
        <YoutubeEmbed embedId="o-eduqKUgx8" />
      </div>
    </section>
  );
};

export default Deploy;
