import {GET_POSTS} from "../types";


export const loadPosts = () => {
    return async (dispatch) => {

        const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getPosts(posts))
    }
}


export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        payload: posts
    }
}


