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
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer
