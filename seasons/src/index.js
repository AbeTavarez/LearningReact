import React, { Component } from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}


class App extends Component{
  //* OLD way
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     lon: null
  //   }
  //    // gets user location
  //    window.navigator.geolocation.getCurrentPosition(
  //     position => this.setState({lat: position.coords.latitude}),
  //     err => console.log(err)
  //   )

  // }

  state = {
    lat: null,
    lon: null,
    errorMsg: ''
  }

  componentDidMount(){
        // gets user location
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({lat: position.coords.latitude, lon: position.coords.longitude}),
          err => this.setState({errorMsg: err.message})
        )
  }

  render(){
    return <div>

      {// loading
        !this.state.errorMsg && !this.state.lat && !this.state.lon &&
        <h4>Loading...</h4>
      }

      {// lat and lon
        !this.state.errorMsg && this.state.lat && this.state.lon &&
        <div>
          <div>Latitude:  {this.state.lat}</div>
        <div>Longitude:  {this.state.lon}</div>
        </div>
      }

      <br/>
      {// Error 
        this.state.errorMsg && !this.state.lat &&
        <div>Error: {this.state.errorMsg}</div>
      }

    </div>
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));

//* function component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//   return <div>Hi there!</div>;
// };
