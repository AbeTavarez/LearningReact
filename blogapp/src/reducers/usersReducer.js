export default (state=[], action) => {
    if (action.type === 'FETCH_USER'){
        return [...state, action.payload]
    };
    return state
    // switch(action.type) {
    //     case 'FETCH_USER':
    //         return [...state, action.payload];
    //     default:
    //         return state;
    // }
};