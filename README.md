# Learning React

## What's React ?

  - React is a JavaScript library for building user interfaces especially for single page application (SPA).
  - React is an open source project created and maintained by Facebook.
  - React is used to build dynamic user interfaces.

## Why use React ?

  - React can be use in the browser and in the server server.
  - You can build very powerful frontend applications using React.
  - You can implement `Routing` in the frontend and update certain parts of the UI making the application very dynamic.
  - React is Component based. We can reused components in the same or in different applications.
  - Code Organization. Code is organized in components rather than separated files.
  - React makes manipulating the DOM much easier.
  - React is very light and fast.
  - React is the most famous frontend library.

#### From Reactjs.org:

  - Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.

  - Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

  - Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## What is the Virtual DOM (VDOM) ?

  - The Virtual DOM (VDOM) is an in-memory representation of Real DOM. 
  - It is lightweight JavaScript object which is copy of Real DOM.
  - The representation of a UI is kept in memory and synced with the "real" DOM.
  - Manipulating the DOM is slow. Manipulating the virtual DOM is much faster.

## How the Virtual DOM works ?

The Virtual DOM works in three simple steps.

  1- Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

  2- Then the difference between the previous DOM representation and the new one is calculated.

  3- Once the calculations are done, the real DOM will be updated with only the things that have actually changed.


## What is a component ?

  - In it's most basic definition, a Component is a React class or function that returns some HTML or (JSX).
  - Components allow you to create individual elements of a page.
  - Components can have their own logic, style, props and state.

## What is JSX ?

JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.

## Expressions and Conditionals in JSX
 - We can use any JavaScript expression inside {} curly brackets.
 - We can use regular if statements or ternary expression to show different data.
`
function App() {
  const name = 'React'; //variable
  const sayHello = () => 'Hello World!'; // function
  const loading = true; // Boolean
  const nextStep = true; // Boolean
  return (
    <div className="App">
     <h1>Hello { name }</h1>

    { loading ? <h3>Loading...<h3> : <h2>{sayHello()}</h2> } 

    { loading ? <h4>Loading...</h4> : <h4>Hello {admin && name}</h4> }
    </div>
  );
}
`



## Required Tools:
  - Nodejs
  - React Developer Tools
  - VS Code
  - Git
  - Recommended extensions:
    - Live Server
    - Bracket Pair Colorizer 2
    - Auto Rename Tag
    - Prettier-Code Formatter (format code on save)

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

  - UseEffect Clean UP function: this function it's call right before the next time useEffect runs again or when we're about to stop showing a component on the screen. 
    - See Search.js and Dropdown.js in the Widgets project.

  `useEffect(() => {
    const timerId = setTimeout(() => { 
    }, 1000);
    // useEffect Clean Up function
    return () => {
      clearTimeout(timerId);
    }
  }, [term]);
  `

##### useRef hook: 

 - It allows you to create a reference some other element in a function component.
 - A ref allows a component to listen to an event on a different component. Ex. Check Widgets/Dropdown: 

 `
 useEffect(() => {
    document.body.addEventListener("click", (e) => {
        // The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
        if (ref.current.contains(e.target)) {
            return // if it's contained we return early 
        }
        setOpen(false);
      },
      { capture: true }
    );
  }, []);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdowm ${open ? "visible active" : ""}`}
        >
          <i className="dropdowm icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
 `


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



### Links

[SemanticUI]('https://semantic-ui.com/')

### Code Snippets
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



### React-Redux

#### Actions


### Rules of Reducers

- Reducers must return some value, besides "undefined".
- Reducers produce "state", or data to be used inside of your app using only previous state and the action (reducers are pure).
- Must not return reach out of its function or "its self" to decide what value to return.
- Must not directly mutate its input "state" argument. (We return a new "state to let React knows that we have updated our state and we should re-render")

### Working with State inside Reducers.

- Removing an element from an array.
  - Bad
  `
    state.pop();
  `
  - Good
  `
    state.filter(post => post !== postToRemove);
  `

- Adding an element to an array.
  - Bad
  `
    state.push(newPost);
  `
  - Good
  `
    [...state, newPost];
  `

- Replacing an element in an array.
 - Bad
 `
  state[0] = newPost
`

- Good
`
  state.map(post => post === postToReplace ? newPost: post);
`  
---------------------------
- Removing an property from an object.
  - Bad
  `
    delete state[user].age
  `
  - Good
  `
    {state[user], state[user].name: undefined}
  `

- Adding an property to an object.
  - Bad
  `
    state[user].location = newLocation;
  `
  - Good
  `
    {...state[user], location: newLocation}
  `

- Replacing an property from an object.
 - Bad
 `
  state[user].name = newName;
`
- Good
`
  //  Evaluated from left to right
  {...state[user], name: newName}; current name property will be overwritten with newName
`  

### Code Snippets


`
// Async Action Creator
export const fetchPosts = () => async dispatch => {
        const res = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: res});
};
`

#### Redux Dev Tools
`
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import App from './components/App';
import reducers from './reducers';
 
// change your store and Provider setup to look like this:
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true});
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
`