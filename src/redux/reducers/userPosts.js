import {GET_USER_POSTS} from "../types";

const initialState = {
    userPosts: []
}

export const userPostsReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_USER_POSTS:
            return {...state,
                userPosts: action.payload
            }
        default:
            return state
    }
}