import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    var {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  };

  return (
    <div className="ui container">
      <SearchBar onSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
