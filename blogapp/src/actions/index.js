import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
        const res = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: res.data});
};

export const fetchUser = () => {
    const res = await jsonPlaceholder.get('/users');
    dispatch({type: 'FETCH_USERS', payload: res.data});
}
