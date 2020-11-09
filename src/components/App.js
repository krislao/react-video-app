import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetails from "./video/Details";
import VideoList from "./video/List";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div>
          <VideoDetails />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
