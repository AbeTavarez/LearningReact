import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import {useState, createContext} from 'react'
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About'

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      {/* <UserContext.Provider value={user} > */}
      <Switch>
        <Route exact path='/' render={props => <Landing {...props} setUser={setUser}/>}/>
        {/* <Route path='/home' component={Home}/> */}
        <Route path='/home' render={props => <Home {...props} user={user}/>}/>
        <Route path='/about' component={About}/>
      </Switch>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
