const initialState = {
    chats: [],
}

const chatReducer = (state = initialState, action) => {
    if(!action || !action.type) {
        console.log('No action or action type');
        return state;
    }
    switch (action.type) {
        case 'CREATE_CHAT':
            return{
                ...state,
                chats: [...state.chats, action.chat]
            }
            case 'DELETE_CHAT':
                return{
                    ...state,
                    chats: state.chats.filter(chat => chat.id !== action.id)
                }
                case 'UPDATE_CHAT':
                    return{
                        ...state,
                        chats: state.chats.map(chat => {
                            if(chat.id === action.id){
                                return {
                                    ...chat,
                                    ...action.chat
                                }
                            }
                            return chat;
                        })
                    }
                    default:
                        console.log(`Action type ${action.type} not found`);
                        return state;
    }
}

export default chatReducer;