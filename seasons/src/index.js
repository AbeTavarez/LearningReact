import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}


class App extends Component{
  //*  Using constructor
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
    console.log(`component rendered to screen`);
        // gets user location
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({lat: position.coords.latitude, lon: position.coords.longitude}),
          err => this.setState({errorMsg: err.message})
        )
  }

  componentDidUpdate(){
    console.log(`component updated`);
  }

  render(){
    const { lat, lon, errorMsg } = this.state; 

    return <div>

      {// loading
        !errorMsg && !lat && !lon &&
        <Spinner message="Please allow location request" />
      }

      {// lat and lon
        !errorMsg && lat && lon &&
        <SeasonDisplay lat={lat} lon={lon}/>
      }

      <br/>
      {// Error 
        errorMsg && !lat &&
        <div>Error: {errorMsg}</div>
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
