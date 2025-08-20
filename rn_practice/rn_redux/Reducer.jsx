const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        case 'add':
            return {
                ...state,
                count: state.count + action.data
            };
        case 'subtract':
            return {
                ...state,
                count: state.count - action.data
            };

        default:
            return state
    }
}

export default reducer;


