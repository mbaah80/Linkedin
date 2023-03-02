import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/post/postSlice';
import userReducer from '../features/user/userSlice';
import modalReducer from '../features/modalSlice';

const store = configureStore({
  reducer:{
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    modal: modalReducer
  }
})

export default store;
