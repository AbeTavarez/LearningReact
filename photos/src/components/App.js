import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {
    state = {
        images: []
    }
    onSearchSubmit = async term => {
        // console.log(term);
        const res = await unsplash.get(`/search/photos`,{
            params: {
                query: term
            },
           
        })

        this.setState({images: res.data.results})
    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmitProp={this.onSearchSubmit}/>
                Found: {this.state.images.length}
                <ImageList />
            </div>
        )
    }
    
}

export default App;