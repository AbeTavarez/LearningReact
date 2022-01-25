const message = 'Hello World';

// Vanilla JavaScript
// const h1 = document.createElement('h1');
// h1.textContent = message;
// document.querySelector('#root').appendChild(h1)


ReactDOM.render(
    <h1>{message}</h1>,
    document.getElementById('root')
);