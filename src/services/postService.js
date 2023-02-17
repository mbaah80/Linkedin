import axios   from "axios";

let baseUrl = "http://localhost:3002/";



const createPost = async (postData, token) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.post(baseUrl + 'posts/CreatePost', postData, config)
    return response.data
}


const getFeedPosts = async (token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get(baseUrl + 'posts', config)
    return response.data
}

const getFeedPostsByUserId = async (token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
        const response = await axios.get(baseUrl + 'posts/getFeedPostsByUserId', config)
        return response.data
}

const postService = {
    createPost,
    getFeedPosts,
    getFeedPostsByUserId
}

export default postService