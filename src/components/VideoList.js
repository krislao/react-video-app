import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  var renderedList = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
