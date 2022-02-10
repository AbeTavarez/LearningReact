class App extends React.Component {

  constructor() {
    super();
    console.log("Hello From Constructor");
  }

  componentDidMount() {
    console.log("Hello From Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Hello From Component Did Update");
  }

  state = {
      toDos: []
  }

  fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json();
    this.setState({toDos: data})       
  }

  render() {
    console.log("Hello From Render");
    return (
      <div>
        <h1>React Life Cycle Methods</h1>
        <button onClick={this.fetchData}>Fetch Data</button>

        { this.state.toDos && <ToDos toDos={this.state.toDos} /> }
      </div>
    );
  }
}

const ToDos = props => props.toDos.map(todo => <h3>{todo.title}</h3>) 

ReactDOM.render(<App />, document.getElementById("root"));
