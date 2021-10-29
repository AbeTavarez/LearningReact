import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchSubmit(term) {
        // console.log(term);
        axios.get(`https://api.unsplash.com/search/photos`,{
            params: {
                query: term
            },
           headers: {
               Authorization: 'Client-ID gAK30bwfE0h7jWXLNGQ4nrWgzgwRnzZBfB4bLW5OGWM'
           }
        })
    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmitProp={this.onSearchSubmit}/>
            </div>
        )
    }
    
}

export default App;