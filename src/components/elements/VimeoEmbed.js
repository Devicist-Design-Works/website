import React from "react";
import PropTypes from "prop-types";

const VimeoEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="528"
      height="396"
      src={`https://player.vimeo.com/video/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

VimeoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default VimeoEmbed;
