

// What is a component?
// a component is a function that return some JSX

// function declaration
function Component1() {
    return <h1>First functional component</h1>
}

//function expression
const Component2 = function() {
    return <h2>Second functional component</h2>
}

// arrow functions
const Component3 = () => <h3>Third functional component</h3> 

//! ==================== for props review
const ParentComponent = () => {
    //! show 2nd
    let message = ''; // some piece of state
    const setMessage = newMessage => console.log(message = newMessage); // func to set or change the state


    //!show tile
    return(
        <div>
            <h2>Parent Component</h2>
            
            <ChildComponent someValue={'Dallas!'} setMessageFunction={setMessage} />
        </div>
    )
}

const ChildComponent = (props) => {
    props.setMessageFunction('Dallas Rocks!');

    return (<div>
        <h3>{props.someValue}</h3>
    </div>)
}


//! Review Rules of JSX and `Top level element`
const App = () => {
    return (
        <div>
            <Component1 />
            <Component2 />
            <Component3 />
            <hr />

            <ParentComponent />

        </div>
    )
}

// TODO: Review camelCase attributes, inline styling

// TODO: Review props

ReactDOM.render(<App />, document.getElementById('root'))