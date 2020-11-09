import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends Component {
  state = { videos: [] };

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

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div>
          <VideoDetails />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
