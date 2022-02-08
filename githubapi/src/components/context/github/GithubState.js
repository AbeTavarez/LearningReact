import { useReducer } from 'react';
import axios from'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from '../types';




const GithubState = props => {
    //* initial state
    const initialState = {
        user: [],
        user: {},
        repos: [],
        loading: false,
    }

    //* useReducer takes (GithubReducer = custom state logic) and the initialState
    //* then it returns the current state and a dispatch method.
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //* ======== Actions

    // Search User
    const searchUsers = async (searchText) => {
        console.log(searchText);
        setLoading();
        const res = await axios.get(
          `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      };

    // Get User

    // Get repos

    // Clear Users

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos : state.repos,
            loading: state.loading,
            searchUsers
        }}
    >
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;