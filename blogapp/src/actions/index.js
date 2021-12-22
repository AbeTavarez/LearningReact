import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
        const res = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: res.data});
};

export const fetchUser = (userId) => async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({type: 'FETCH_USER', payload: res.data});
};
