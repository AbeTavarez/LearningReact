import React, { Component } from "react";
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends Component {
    state = {
        videos: [] 
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

    render() {
        return (
            <div className="ui container">
  
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length}

            </div>
        )
    }
}

export default App;