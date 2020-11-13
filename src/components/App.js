import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onTermSubmit = async (term) => {
    var {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos, selectedVideo: videos[0] });
  };

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    var { selectedVideo, videos } = this.state;

    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {selectedVideo && <VideoDetail video={selectedVideo} />}
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
