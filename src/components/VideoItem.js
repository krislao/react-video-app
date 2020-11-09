import React from "react";

function VideoItem(props) {
  return <li>{props.video.snippet.title}</li>;
}

export default VideoItem;
