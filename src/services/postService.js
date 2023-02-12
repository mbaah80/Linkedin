import axios   from "axios";

let baseUrl = "http://localhost:3002/";



const createPost = async (postData) => {
    let token = localStorage.getItem('token')
    const response = await axios.post(baseUrl + 'posts', postData,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response.data
}


const getFeedPosts = async () =>{
    const response = await axios.get(baseUrl + 'post', {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return response.data
}


export default {
    createPost,
    getFeedPosts
}