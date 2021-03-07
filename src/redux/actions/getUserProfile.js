import {GET_USER_PROFILE} from "../types";

export const getUserProfile = (user)=>{
    return {
        type: GET_USER_PROFILE,
        payload: user
    }
}