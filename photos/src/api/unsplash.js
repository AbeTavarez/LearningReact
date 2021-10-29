import axios from 'axios';

// basic config
export default axios.create({
    baseURL:`https://api.unsplash.com`,
    headers: {
        Authorization: 'Client-ID gAK30bwfE0h7jWXLNGQ4nrWgzgwRnzZBfB4bLW5OGWM'
    }
});