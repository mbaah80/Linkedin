import {SET_FEEDS, ADD_FEED, DELETE_FEED, UPDATE_FEED} from '../actions/feedAction';

const initialState = {
    feeds: [],
}

const feedReducer = (state = initialState, action) => {
    if (!action || !action.type) {
        console.log('action or action.type is undefined');
        return state;
    }
    switch (action.type) {
        case SET_FEEDS:
            return{
                ...state,
                feeds: action.payload
            }
            case ADD_FEED:
                return{
                    ...state,
                    feeds: [...state.feeds, action.payload]
                }
                case DELETE_FEED:
                    return{
                        ...state,
                        feeds: state.feeds.filter(feed => feed.id !== action.payload)
                    }
        case UPDATE_FEED:
            return{
                ...state,
                feeds: state.feeds.map(feed => feed.id === action.payload.id ? action.payload.updatedFeed : feed)
            }
        default:
            console.log(`Unknown action type: ${action.type}`);
         return state;
    }
}

export default feedReducer;