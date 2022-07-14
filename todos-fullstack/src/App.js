import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import {useState} from 'react'
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About'

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={props => <Landing {...props} setUser={setUser}/>}/>
        {/* <Route path='/home' component={Home}/> */}
        <Route to='home' render={props => <Home {...props} user={user}/>}/>
        <Route path='/about' component={About}/>
      </Switch>
    </div>
  );
}

export default App;
