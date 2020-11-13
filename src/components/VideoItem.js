import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  var {
    snippet: { thumbnails, title },
  } = video;

  function onVideoClick() {
    onVideoSelect(video);
  }

  return (
    <div className="video-item item" onClick={onVideoClick}>
      <img className="ui image" src={thumbnails.default.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
