import axios from 'axios'

let baseUrl = "http://localhost:3002/auth/"

const login = async (userData) =>{
    const response = await axios.post(baseUrl + 'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
   return response.data
}

const register = async (userData) =>{
    const response = await axios.post(baseUrl + 'register', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async () =>{
    localStorage.removeItem('user')
}


export default {
    login,
    register,
    logout

}