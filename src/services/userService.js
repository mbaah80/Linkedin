import axios   from "axios";

let baseUrl = "https://backend-gamma-rouge.vercel.app/";


const getAllUsers = async (token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get(baseUrl + 'users', config)
    return response.data
}


const getUser = async (userId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get(baseUrl + 'users/' + userId, config)
    return response.data
}

const userFriends = async (userId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get(baseUrl + 'users/friends/' + userId, config)
    return response.data
}

const followUser = async (userId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.put(baseUrl + 'users/follow/' + userId, {}, config)
    return response.data
}

const updateUser = async (userId, token, data) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.put(baseUrl + 'users/' + userId, data, config)
    return response.data
}

const userService = {
    getAllUsers,
    getUser,
    userFriends,
    followUser,
    updateUser
}

export default userService

