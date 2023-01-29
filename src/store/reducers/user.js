const initialState = {
    user: {},
}
const user = (state = initialState,  action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'Login_User':
            return{
                ...state,
                user: action.user
            }
        case 'Logout_User':
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default user;