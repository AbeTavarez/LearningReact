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

    // Get User

    // Get repos

    // Clear Users

    // Set Loading

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos : state.repos,
            loading: state.loading
        }}
    >
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;