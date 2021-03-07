import {GET_USER_PROFILE} from "../types";



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



export const getUserProfile = (user)=>{
    return {
        type: GET_USER_PROFILE,
        payload: user
    }
}