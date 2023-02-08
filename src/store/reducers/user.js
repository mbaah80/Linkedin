import {LOGIN, REGISTER, LOGOUT, UPDATE_USER, SET_USER, DELETE_USER } from "../actions/userAction";

const initialState = {
    user: localStorage.getItem("user"),
    isLoggedIn: false,
    error: null,
}
const userReducer = (state = initialState,  action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN:
            return{
                ...state,
                user: {
                    ...state.user,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        case REGISTER:
            return{
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        case LOGOUT:
            return{
                ...state,
                user: {}
            }
        case UPDATE_USER:
            return{
                ...state,
                user: {...state.user, ...action.payload}
            }
        case DELETE_USER:
            return{
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export default userReducer;