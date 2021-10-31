import React from 'react'


const VideoList = ({videos}) => {
    const videoList = videos.map( video => (
        <div>
            <h3>{video.snippet.channelTitle}</h3>
        </div>
    ))
    return <div>
        {videoList}
    </div>
}

export default VideoList;