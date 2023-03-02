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

const deletePost = async (postId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.delete(baseUrl + 'posts/deletePost/' + postId, config)
    return response.data
}

const deleteComment = async (commentData, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.delete(baseUrl + 'posts/deleteComment/' + commentData.postId + '/comments/' + commentData.commentId, config)
    return response.data
}

const rePost = async (postId, token) =>{
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await axios.post(baseUrl + 'posts/repost/' + postId, {},  config)
    return response.data
}

const postService = {
    createPost,
    getFeedPosts,
    getFeedPostsByUserId,
    likePost,
    getSingleFeed,
    commentPost,
    rePost,
    deletePost,
    deleteComment
}

export default postService