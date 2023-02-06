import axios from "axios";
export const LOGIN = "Login_User";
export const REGISTER = "Register_User";
export const LOGOUT = "Logout_User";
export const UPDATE_USER = "UPDATE_USER";
export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";



export function setUser(user) {
    return {
        type: SET_USER,
        payload: {
            user,
        },
    };
}

export const  login = (email, password) => async (dispatch) =>{
  try{
    const res = await axios.post("http://localhost:3002/auth/login", {email, password});
    dispatch({type: LOGIN, payload: res.data});
  }catch(err){
    console.error(err.response.data.msg);
    dispatch(err.response.data.msg)
  }
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