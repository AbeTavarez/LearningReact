# Learning React

## What's React ?



## Components Lifecycle Methods

 - A component lifecycle is a function that we can define in our component class.

 - These functions are called automatically by React, during the lifecycle of a component.

 - The lifecycle methods are: 
    - constructor: the constructor function is called every time we create a new instance of our component.
    It's good for doing one time setup like declaring state. (is not best practice to do data loading here but it's possible)

    - render: the render method is NOT optional, it is called after the creation of our component, and it shows some JSX on the screen.

    - componentDidMount: it's called right after a component shows (mount) on the browser. 
    One use case of this method is to fetch some data right after a component shows up in the browser.

    - componentDidUpdate: it's called every time our component gets an update. 
    One use case can be to do more data loading or when we the state or props change.

    - componentWillUmount: it's called when we want to stop showing (unmount) a component on the screen, this method is useful for doing some cleanup after our component.

 - Other infrequently used lifecycle methods are : shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate.
    - Read more at [React Docs]('https://reactjs.org/docs/react-component.html')


## Event Handlers
 - Ex. form and input tags.
 - Use arrow functions, or bind the this keyword.
 - You can pass a callback func from the parent (App) to a child (SearchBar) and the child will call that callback. That way we can pass data from child to parent.
 - When we need to reach to the DOM we have to use REFS, since we are using JSX we need to work with REFS. (see below)

## Refs
Refs provide a way to access DOM elements or React elements created in the render method. 
 - Create a Refs inside the constructor and then wired it to an individual element by passing it down as a ref property (ref={this.imageRef}). Later to can access the ref and get a handle on the actual DOM node.

[React Refs]('https://reactjs.org/docs/refs-and-the-dom.html')

## Hooks

##### useState hook:
 - it allows you to use state in a functional component.

#### useEffect hook: 
 - it allows you to use something like lifecycle methods. 
   - The first parameter is a function, the second one is an optional array:
   - `useEffect(() => {
      console.log('Hello from use effect');
  });`

 - We can configure useEffect to run some code automatically in one of three scenarios:
   - When the component is rendered for the first time.
      `useEffect(() => {
      console.log('Runs only for the first time.');
  }, []);`

   - When the component is rendered for the first time and the component whenever it rerenders.
       `useEffect(() => {
      console.log('Runs for the first time and whenever the component rerenders.');
  });`

   - When the component is rendered for the first time and (whenever it rerenders and some piece of data has changed).
      `useEffect(() => {
      console.log('Hello from use effect');
  }, [someVariableThatChanged]);`

##### useRef hook: 
 - it allows you ro create a ref in a function component.


## React Router-DOM
Install `npm i react-router-dom`

  ### Router

 - Router Component: tracks the URLs and passes the information to all the other React Router components to work.
 Router is a Provider, to give the whole app access to the Router wrap the App component in Router.

 import { BrowserRouter as Router } from "react-router-dom";
 `
  ReactDOM.render(
    <Router>
      <App />
    </Router>, document.getElementById("root)
  )
 `

  ### Route
  - Route Component: defines a route and will render JSX only if the URL matches the path specified.

  - Three ways to write your routes:

    1. JSX as child of Route Component: 
      <Route path="/home" <Home /> />
      Pro: Can pass props to component. Con: Doesn't receive the Router props -> history, Location, Match.

    2. Using the Component Prop:
      <Route path="/home" component={Home}>
      Pro: Receives router props. Con: Can't pass custom props

    3. Passing a Function to the Render Prop:
       <Route path="/home" render={routerProps => <Home {...routerProps} /> } />
       Pro: Can receive custom props and router props. 



## Links

[SemanticUI]('https://semantic-ui.com/')

## Code Snippets
 - Handle Input Change
 
`onInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };`

 - Function Component with useState

 `const Search = () => {
  const [term, setTerm] = useState("");
  

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
 `