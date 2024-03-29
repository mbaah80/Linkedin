import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "../../services/authService";

const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null

const initialState = {
    user,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
}

//Login Service
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI)=>{
    try{
        return await authService.login(userData)
    }catch (e) {
        const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

//Register Service
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI)=>{
  try {
        return await authService.register(userData)
  }  catch (e) {
      const message = (e.response && e.response.data && e.response.data.msg) || e.msg || e.toString();
      return thunkAPI.rejectWithValue(message)
  }
})

//Logout Service
export const logout = createAsyncThunk('auth/logout', async ( )=>{
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(login.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            .addCase(register.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) =>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })

            .addCase(logout.fulfilled, (state) =>{
                state.user = null;
            })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer