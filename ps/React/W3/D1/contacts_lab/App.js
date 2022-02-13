console.log(users);

// Create App, Header, Footer, ContactList, ContactItem.
// No need for state, just map over the users and show the data.
//only Use functional components
// ContactList will render multiple ContactItem components
// style your app!!

// if we have time we can introduce useState hook then come back and use the useState hook here

const Header = () => <nav> <h1>Contact List App</h1> </nav>;

const Footer = () => <footer> <h3>Contact Us!</h3> </footer>;

const ContactList = () => {
    return users.map(user => <ContactItem user={user}/>)
}

const ContactItem = ({user}) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </div>
    )
}


const App = () => {
    return(
        <div>
            <Header />
            <ContactList />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));