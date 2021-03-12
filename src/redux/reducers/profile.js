import {GET_USER_PROFILE} from "../types";


const initialState = {
    id: '',
    firstName: '',
    lastName: '',
    username: '',
    email: '',
}

export const profileReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_USER_PROFILE:
            return {...state,
                id: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                username: action.payload.username,
                email: action.payload.email,
            }
        default:
            return state
    }
}