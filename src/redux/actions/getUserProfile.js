import {GET_USER_PROFILE} from "../types";



export const loadSingleUser = (userId)=>{
    return async (dispatch)=>{
        const user = await fetch(`http://localhost:5000/users/${userId}`,{
            method: 'GET',
            credentials: 'include'
        })
            .then(res=>res.json())
            .catch((err)=>{
                console.log(err.message)
            })
        dispatch(getUserProfile(user))
        console.log(user);
    }

}



export const getUserProfile = (user)=>{
    return {
        type: GET_USER_PROFILE,
        payload: user
    }
}