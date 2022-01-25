// Header Component
class Header extends React.Component {
    render() {
        return <h1>React Tac Toe</h1>
    }
}

// player Component
class Player extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>Player {this.props.whichPlayer}</h2>
        <h3>Wins: </h3>
      </div>
    );
  }
}

// Board Component
class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return <div>square</div>;
  }
}

class App extends React.Component {
  render() {
    return (
        <div className=''>
        <Header />
       
        <Player whichPlayer="X"/>
        <Player whichPlayer="O"/>
        
        <Board />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
