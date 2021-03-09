import {GET_CURRENT_USER} from "../types";

const initialState = null

export const currentUser = (state=initialState, action)=>{
    switch (action.type){
        case GET_CURRENT_USER:
            return action.payload
        default:
            return state
    }
}