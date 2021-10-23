# Learning React



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
Read more at [React Docs]('https://reactjs.org/docs/react-component.html')