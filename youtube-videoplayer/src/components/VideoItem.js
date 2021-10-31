import React from 'react'
import './VideoItem.css'
import VideoList from './VideoList';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} className="ui image" alt={VideoList.snippet.description}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
    </div>
    )
}

export default VideoItem;