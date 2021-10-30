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

## Links

[SemanticUI]('https://semantic-ui.com/')
