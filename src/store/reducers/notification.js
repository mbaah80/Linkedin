const initialState = {
    notification:[]
}

const notificationReducer = (state = initialState, action) => {
    if(!action || !action.type){
        console.log("No action or action type");
        return state;
    }
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return{
                ...state,
                notification: action.notification
            }
            case 'DELETE_NOTIFICATION':
                return{
                    ...state,
                    notification: action.notification.filter((item) => item.id !== action.id)
                }
                default:
                    console.log(`No action type ${action.type}`);
                    return state;

    }

}


export default notificationReducer;