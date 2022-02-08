class App extends React.Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
  };

  changeIt = (text) => {
      this.state.tardis.caps ? (
        this.setState({tardis: {
            name: text.toLowerCase(),
            caps: false
        }})
      ) : (
          this.setState({
              tardis: {
                  name: text.toUppercase(),
                  caps: true
              }
          })
      )
  }


  render() {
    return (
      <div>
          {/* <h3>{this.state.tardis.name}</h3> */}
       <DivOne data={this.state.tardis} onChange={this.changeIt}/>
      </div>
    );
  }
}


class DivOne extends React.Component {
    render(){
        return(
            <div onClick={this.props.onChange}>
                
                 <h3>{this.props.data.name}</h3>
            </div>
        )
    }
}
// class DivTwo extends React.Component {
//     render(){
//         return()
//     }
// }
// class DivThree extends React.Component {
//     render(){
//         return()
//     }
// }

ReactDOM.render(<App />, document.getElementById("root"));
