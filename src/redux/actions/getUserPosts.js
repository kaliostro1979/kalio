import {GET_USER_POSTS} from "../types";

export const getUserPosts = (userPosts)=>{
    return {
        type: GET_USER_POSTS,
        payload: userPosts
    }
}

