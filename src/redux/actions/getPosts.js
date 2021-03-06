import {GET_POSTS} from "../types";

export const getPosts = (posts, loader) => {
    return {
        type: GET_POSTS,
        payload: posts,
        load: loader
    }
}


