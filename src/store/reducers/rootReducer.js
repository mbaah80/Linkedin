import {combineReducers} from "redux";
import chatReducer from "./chat";
import userReducer from "./user";
import commentsReducer from "./comments";
import feedReducer from "./feeds";
import followsReducer from "./follows";
import jobsReducer from "./jobs";
import notificationReducer from "./notification";

const rootReducer = combineReducers({
    chat: chatReducer,
    user: userReducer,
    comments: commentsReducer,
    feeds: feedReducer,
    follows: followsReducer,
    jobs: jobsReducer,
    notifications: notificationReducer
});


export default rootReducer;