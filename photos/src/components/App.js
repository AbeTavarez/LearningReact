import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async term => {
        // console.log(term);
        const res = await axios.get(`https://api.unsplash.com/search/photos`,{
            params: {
                query: term
            },
           headers: {
               Authorization: 'Client-ID gAK30bwfE0h7jWXLNGQ4nrWgzgwRnzZBfB4bLW5OGWM'
           }
        })

        this.setState({images: res.data.results})
    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmitProp={this.onSearchSubmit}/>
                Found: {this.state.images.length}
            </div>
        )
    }
    
}

export default App;