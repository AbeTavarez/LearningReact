import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map((video) => (
    <VideoItem onVideoSelect={onVideoSelect} video={video} />
  ));

  return <div className="ui relaxed divided list">{videoItems}</div>;
};

export default VideoList;