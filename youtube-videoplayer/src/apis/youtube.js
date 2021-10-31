import axios from 'axios';

const KEY ="AIzaSyAOwK5nEWN1T9nFjTD3Ykwj00NJTxEiUJk";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})