import {GET_POSTS} from "../types";

const initialState = {
    posts: [],
    isFetching: false
}

export const postReducer = (state= initialState, action)=>{
    switch (action.type){
        case GET_POSTS:
            return {...state,
                posts: action.payload,
                isFetching: action.load
            }
        default:
            return state
    }
}

