import {GET_USERS} from "../types";


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



export const getUsers = (users)=>{
    return{
        type: GET_USERS,
        payload: users
    }
}