import {getPosts} from "./actions/getPosts";
import {getUsers} from "./actions/getUsers";


let loader = false

export const loadPosts = () => {
    return async (dispatch) => {
        loader = true
        const posts = await fetch('http://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        loader = false
        dispatch(getPosts(posts, loader))
    }
}

export const loadUsers = ()=>{
    return async (dispatch)=>{
        const users = await fetch('http://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getUsers(users))
    }
}