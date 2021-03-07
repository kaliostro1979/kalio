import {getPosts} from "./actions/getPosts";
import {getUsers} from "./actions/getUsers";
import {getUserProfile} from "./actions/getUserProfile";
import {getUserPosts} from "./actions/getUserPosts";



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

export const loadSingleUser = (userId)=>{
    return async (dispatch)=>{
        const user = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res=>res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getUserProfile(user))
    }

}

export const loadUserPosts = (userId)=>{
    return async (dispatch)=>{
        const userPosts = await fetch(`http://jsonplaceholder.typicode.com/posts/?userId=${userId}`)
            .then(res=>res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getUserPosts(userPosts))
    }
}
