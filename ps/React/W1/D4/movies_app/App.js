// import MovieInfo from "./MoveInfo";

class App  extends React.Component {
    // http://www.omdbapi.com/?i=tt3896198&apikey=d9040479
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=d9040479',
        query: '&t=',
        movieTitle: '',
        searchURL: ''
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        const {baseURL, apiKey, query, movieTitle} = this.state;
        e.preventDefault();
        this.setState({searchURL: `${baseURL}${apiKey}${query}${movieTitle}`}, () => {
            fetch(this.state.searchURL, {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({movie: data, movieTitle: ''})
            }, 
            err => console.error(err))
        })
    }
    render() {
       
        return(
           <div>
             <h1>Movie App</h1>

             <form onSubmit={this.handleSubmit}>
                 <label htmlFor='movieTitle'>Movie Title</label>
                 <input type='text' name='movieTitle' onChange={this.handleChange} value={this.state.movieTitle} />
                 <input type='submit' value='Search Movie'/>
             </form>
             {/* <a href={this.state.searchURL}>{this.state.searchURL}</a> */}
            {this.state.movie ?  <MovieInfo movie={this.state.movie}/> : null}
           </div>
        )
    }
};


class MovieInfo extends React.Component {
    render() {
        const { Title, Year, Poster, Genre, Plot } = this.props.movie;
        return(
            <div>
                <h1>Title: {Title}</h1>
                <h2>Year: {Year}</h2>
                <img src={Poster} alt="Movie Title"/>
                <h3>Genre: {Genre}</h3>
                <h4>Plot: {Plot}</h4>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))