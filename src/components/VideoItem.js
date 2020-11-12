import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  function onVideoClick() {
    onVideoSelect(video);
  }

  return (
    <div className="video-item item" onClick={onVideoClick}>
      <img className="ui image" src={video.snippet.thumbnails.default.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
