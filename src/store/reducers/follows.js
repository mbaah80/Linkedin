const initialState = {
    users:[]
}

const followsReducer = (state = initialState, action) => {
    if (!action || !action.type) {
        console.log('follows reducer: action or action.type is undefined');
        return state;
    }
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'FOLLOW_USER':
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case 'UNFOLLOW_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.user.id)
            }
        default:
            console.log(`Action type ${action.type} not found`);
            return state;
    }
}
export default followsReducer;