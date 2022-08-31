import React from "react";
import deployIcon from "../../../assets/images/BuildIcon-white.svg";
import YoutubeEmbed from "../../elements/YoutubeEmbed";

const Deploy = (DeployContent) => {


  return (
    <section>
      <div className="container-sm deploy reveal-from-bottom">
        <h3 className="reveal-from-bottom ta-l mt-64">
          <img src={deployIcon} alt="build icon" width={40} className="mr-8" />
          Deploy
        </h3>
        <p className="ta-l reveal-from-bottom">
          {DeployContent.body}
        </p>
        <YoutubeEmbed embedId={DeployContent.youtubeUrl} />
      </div>
    </section>
  );
};

export default Deploy;
