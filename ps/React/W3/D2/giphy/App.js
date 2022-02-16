

class App extends React.Component {
    state = {
        data: [],
        ranNum: 0
    }
   async  componentDidMount() {
        const req = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=1Gyc9KesGWa4YGiIjReLXOojU5mdNfBV')
        const res = await req.json();
        this.setState({data: res.data})
        console.log(this.state.data[0].images);
    }

    getRandomGiphy = async () => {
        const req = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=1Gyc9KesGWa4YGiIjReLXOojU5mdNfBV')
        const res = await req.json();
        const randomNum = Math.floor(Math.random() * res.data.length)
        this.setState({ data: res.data, ranNum: randomNum})
       
    }
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1> GIPHY APP</h1>

               <div>
               { this.state.data.length && <img src={this.state.data[this.state.ranNum].images.downsized.url} alt="photo"/> }
               </div>

                <button onClick={this.getRandomGiphy} style={{padding: '10px', background: 'pink', color: '#fff',  border: 'none'}}>Get a random GIPHY</button>

                <h2>{this.state.data.data}</h2>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))