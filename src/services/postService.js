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

const getSingleFeed = async (token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.get(baseUrl + 'posts/singlePost', config)
    return response.data
}

const likePost = async (postId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.put(baseUrl + 'posts/like/' + postId, {},  config)
    return response.data
}

const commentPost = async (newComment, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.put(baseUrl + 'posts/comment/' + newComment.postId, {
        comment: newComment.comment
    },  config)
    return response.data
}

const postService = {
    createPost,
    getFeedPosts,
    getFeedPostsByUserId,
    likePost,
    getSingleFeed,
    commentPost
}

export default postService