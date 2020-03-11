import axios from "axios";

const Video = {
  getVideos: () => axios.get("/videos/list")
    .then(({data: { videos }}) => videos),
  uploadVideo: (file, videoName) =>
    axios.post("/videos/upload", file, { params: { video_name: videoName }})
    .then(({data}) => data)
};

export default Video;
