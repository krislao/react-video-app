import React from "react";

function VideoItem({ video }) {
  return (
    <li>
      <img src={video.snippet.thumbnails.default.url} />
      {video.snippet.title}
    </li>
  );
}

export default VideoItem;
