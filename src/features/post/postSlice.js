import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import postService from "../../services/postService";

const initialState = {
    posts:  [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create Post Service
export const createPost = createAsyncThunk('post/createPost', async(postData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.createPost(postData, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})


//Get Feed Posts Service
export const getFeedPosts = createAsyncThunk('post/getFeedPosts', async (_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.getFeedPosts(token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Get Single Post Service
export const getFeedPostsByUserId = createAsyncThunk('post/getFeedPostsByUserId', async (_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.getFeedPostsByUserId(token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Get Single Post Service
export const getSingleFeed = createAsyncThunk('post/getSingleFeed', async (postId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.getSingleFeed(postId, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Liked Posts
export const likePost = createAsyncThunk('post/likePost', async(postId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await  postService.likePost(postId, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//comment Posts
export const commentPost = createAsyncThunk('post/commentPost', async(newComment, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await  postService.commentPost(newComment,  token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//repost Posts
export const rePost = createAsyncThunk('post/rePost', async(postId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await  postService.rePost(postId,  token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//delete Posts
export const deletePost = createAsyncThunk('post/deletePost', async(postId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await  postService.deletePost(postId,  token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder
            .addCase(createPost.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(createPost.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts.push(action.payload)
            })
            .addCase(createPost.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getFeedPosts.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(getFeedPosts.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = action.payload
            })
            .addCase(getFeedPosts.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(likePost.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(likePost.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.map((post)=> post._id === action.payload._id ? action.payload : post)
            })
            .addCase(likePost.rejected,(state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(commentPost.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(commentPost.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.map((post)=> post._id === action.payload._id ? action.payload : post)
            })
            .addCase(commentPost.rejected,(state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(rePost.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(rePost.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.map((post)=> post._id === action.payload._id ? action.payload : post)
            })
            .addCase(rePost.rejected,(state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deletePost.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(deletePost.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.posts = state.posts.filter((post)=> post._id !== action.payload._id)
            })
            .addCase(deletePost.rejected,(state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer
