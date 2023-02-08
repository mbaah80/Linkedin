import axios from "axios";
import AuthService  from "../../services/authService";
export const LOGIN = "Login_User";
export const REGISTER = "Register_User";
export const LOGOUT = "Logout_User";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SET_MESSAGE = "SET_MESSAGE"



export function setUser(user) {
    return {
        type: SET_USER,
        payload: {
            user,
        },
    };
}

export const  login = (email, password) => async (dispatch) =>{
    return AuthService.login(email, password).then((res)=>{
        dispatch({
            type: LOGIN_SUCCESS
        })
        dispatch({
            type: SET_USER,
        }, res.data)

        return Promise.resolve()
    });

}

export const  register = (name, email, password) => async (dispatch) =>{
    try{
    const res = await axios.post("http://localhost:3002/auth/register", {name, email, password});
    console.log(res.data);
    dispatch({type: REGISTER, payload: res.data});
  }catch(err){
    console.error(err.response.data.msg);
  }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function deleteUser() {
    return{
        type: DELETE_USER,
    }
}