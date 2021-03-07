import {GET_USER_POSTS} from "../types";


export const loadUserPosts = (postId)=>{

    return async (dispatch)=>{
        const userPosts = await fetch(`http://jsonplaceholder.typicode.com/posts/?userId=${postId}`)
            .then(res=>res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getUserPosts(userPosts))
    }
}




export const getUserPosts = (userPosts, loader)=>{
    return {
        type: GET_USER_POSTS,
        payload: userPosts,
        isFetching: loader
    }
}

