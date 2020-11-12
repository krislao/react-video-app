import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetail";
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
    this.setState({ videos });
  };

  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div>
          <VideoDetails />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
