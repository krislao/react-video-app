import axios from "axios";

const KEY = "AIzaSyDZCuQtceQzfqqKkETaZCg0scit_Fb-ph8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
