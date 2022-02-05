import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";

import GithubState from "./components/context/github/GithubState";

const App = () => {
  const [ users, setUsers ] = useState([]);
  const [ user, setUser ] = useState({});
  const [ repos , setRepos ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };

  // Life cycle method
  // async componentDidMount() {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   setUsers(res.data);
  //   setLoading(false);
  // }

  // Search users
  const searchUsers = async (searchText) => {
    console.log(searchText);
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    setUsers(res.data.items) 
    setLoading(false);
  };

  // Search single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data) 
    setLoading(false);
  };

  // Get user repos
  const getUserRepos = async username =>{
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
      setRepos(res.data)
      setLoading(false)
  }

  // Clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

    return (
      <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
              exact
                path="/"
                render={(props) => (
                  <>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={ users.length > 0 ? true : false }
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </>
                )}
              />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User { ...props} getUser={getUser} user={user} getUserRepos={getUserRepos} repos={repos} loading={loading}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
}

export default App;
