import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./video/Details";
import VideoList from "./video/List";
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
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
