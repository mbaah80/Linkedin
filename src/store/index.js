import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
    user: {},
    feeds: [],
    comments: [],
    likes: [],
    followers: [],
    jobs: [],
    notifications: [],
    networks: [],
};

const user = (state = initialState, action) => {
    switch (action.type) {
         case 'SET_USER':
             return {
                 ...state,
                 user: action.user
             }
         case 'Login_User':
             return {
                 ...state,
                 user: action.user
             }
         case 'Logout_User':
             return {
                 ...state,
                 user: action.user
             }
    }
}

export default store;
