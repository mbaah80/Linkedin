import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import userService  from "../../services/userService";
import {defaults} from "axios";

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Get All Users Service
export const getAllUsers = createAsyncThunk('user/getAllUsers', async (_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getAllUsers(token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Get User
export const getUser = createAsyncThunk('user/getUser', async (userId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getUser(userId, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Get User Friends
export const userFriends = createAsyncThunk('user/userFriends', async (userId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.userFriends(userId, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Follow User
export const followUser = createAsyncThunk('user/followUser', async (userId, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.followUser(userId, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Unfollow User
// export const unfollowUser = createAsyncThunk('user/unfollowUser', async (userId, thunkAPI)=>{
//     try {
//         const token = thunkAPI.getState().auth.user.token
//         return await userService.unfollowUser(userId, token)
//     }catch (e) {
//         const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
//         return thunkAPI.rejectWithValue(message)
//     }
// })

//updateUser
export const updateUser = createAsyncThunk('user/updateUser', async (userData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.updateUser(userData, token)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        reset:(state)=> initialState
  },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})

export const {reset} = userSlice.actions
export default userSlice.reducer
