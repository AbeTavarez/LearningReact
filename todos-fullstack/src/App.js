import './App.css';
import {Route, Switch, NoMatch} from 'react-router-dom';
import {useState, createContext} from 'react'
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';
import About from './components/pages/About'
import UpdateTodo from './components/forms/UpdateTodo'
import NotFound from './components/layout/NotFound';

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
        <Route path='/update/:id' component={UpdateTodo}/>
        <Route path='*' component={NotFound}/>
      </Switch>
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
