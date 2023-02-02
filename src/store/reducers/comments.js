const initialState = {
    comments: [],
}


let commentsReducer= (state = initialState, action) => {
    if(!action || !action.type) {
        console.log('No action or action type');
        return state;
    }
    switch (action.type) {
        case 'SET_COMMENTS':
            return{
                ...state,
                comments: action.comments
            }
        case 'ADD_COMMENT':
            return{
                ...state,
                comments: [...state.comments, action.comment]
            }
        case 'DELETE_COMMENT':
            return{
                ...state,
                comments: action.comments.filter(comment => comment.id !== action.id)
            }
            case 'UPDATE_COMMENT':
                return{
                    ...state,
                    comments: action.comments.map(comment => comment.id === action.id ? action.updatedComment : comment)
                }
        default:
            console.log(`Action type ${action.type} not found`);
            return state;
    }
}

export default commentsReducer;