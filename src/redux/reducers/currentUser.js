import {GET_CURRENT_USER, SET_LOGOUT} from "../types";

const initialState = null

export const currentUser = (state= initialState, action)=>{
    switch (action.type){
        case GET_CURRENT_USER:
            return action.payload
        case SET_LOGOUT:
            return state = null
        default:
            return state
    }
}