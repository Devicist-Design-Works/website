import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="528"
      height="396"
      src={embedId}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
    />
  </div>
);

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VideoEmbed;
