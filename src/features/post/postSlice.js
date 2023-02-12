import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import postService from "../../services/postService";

const initialState = {
    post:  [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create Post Service
export const post = createAsyncThunk('post/createPost', async(postData, thunkAPI)=>{
    try {
        return await postService.createPost(postData)
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
            .addCase(post.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(post.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                state.post = action.payload
            })
            .addCase(post.rejected, (state, action)=>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = postSlice.actions
export default postSlice.reducer
