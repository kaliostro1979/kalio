import {SET_LOGOUT} from "../types";


export const logOut = ()=>{
    return async (dispatch)=>{
        const user = await fetch('http://localhost:5000/auth/logout',{
            method: 'GET',
            credentials: 'include',
        })
        dispatch(setLogout(user))
    }
}

export const setLogout = ()=>{
    return {
        type: SET_LOGOUT
    }
}