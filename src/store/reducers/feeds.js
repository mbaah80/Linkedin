
const initialState = {
    feeds: [],
}

const feed = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FEEDS':
            return{
                ...state,
                feeds: action.feeds
            }
            case 'ADD_FEED':
                return{
                    ...state,
                    feeds: action.feeds
                }
                case 'DELETE_FEED':
                    return{
                        ...state,
                        feeds: action.feeds
                    }
        case 'UPDATE_FEED':
            return{
                ...state,
                feeds: action.feeds
            }
        default:
         return state;
    }
}

export default feed;