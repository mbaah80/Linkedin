export const SET_FEEDS = "SET_FEEDS";
export const ADD_FEED = "ADD_FEED";
export const DELETE_FEED = "DELETE_FEED";
export const UPDATE_FEED = "UPDATE_FEED";


export function setFeeds(feeds) {
    return {
        type: SET_FEEDS,
        payload: {
            feeds,
        }
    };
}

export function addFeed(image, description, date, time, user_id) {
    return {
        type: ADD_FEED,
        payload: {
            image,
            description,
            date,
            time,
            user_id
        }
    };
}

export function deleteFeed(id) {
    return {
        type: DELETE_FEED,
    };
}

export function updateFeed(id, updatedFeed) {
    return {
        type: UPDATE_FEED,
        payload: {
            id,
            updatedFeed
        }
    };
}