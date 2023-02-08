import axios from 'axios'

let baseUrl = "http://localhost:3002/auth/"

const login = (email, password) =>{
    return axios.post(baseUrl + 'login', {
        email,
        password
    }).then((res)=>{
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
    }).catch((err)=>{
        console.log(err.response.data.msg)
    })
}

const register = (name, email, password) =>{
    return axios.post(baseUrl + 'register', {
        name, email, password
    }).then((res)=>{
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
}


export default {
    login,
    register

}