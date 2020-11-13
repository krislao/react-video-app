import React from "react";

function VideoDetail({ video }) {
  var {
    snippet: { title, description },
    id: { videoId },
  } = video;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} frameBorder="0" title={title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
