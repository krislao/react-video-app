import { useState } from "react";
import youtube from "../apis/youtube";

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    var {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(videos);
  };

  return [videos, search];
};

export default useVideos;
