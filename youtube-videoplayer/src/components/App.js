import React, { Component } from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    // make request to api and sets state
    onTermSubmit = async term => {
        // request
        const res = await youtube.get(`/search`,{
            params: {
                q: term
            }
        });
        // sets state
        this.setState({videos: res.data.items})
    }

    onVideoSelect = video => {
            this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
  
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;