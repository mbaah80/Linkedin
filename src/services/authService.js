import axios from 'axios'

let baseUrl = "https://backend-gamma-rouge.vercel.app/auth/"

const login = async (userData) =>{
    const response = await axios.post(baseUrl + 'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', response.data.token)
    }
   return response.data
}

const register = async (userData) =>{
    const response = await axios.post(baseUrl + 'register', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token', response.data.token)
    }
    return response.data
}

const logout = async () =>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
}


const authService = {
    login,
    register,
    logout
}
export default authService