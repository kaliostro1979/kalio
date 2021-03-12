import {GET_USER_PROFILE} from "../types";


const initialState = {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    company: '',
    website: ''
}

export const profileReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_USER_PROFILE:
            return {...state,
                id: action.payload._id,
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email,
                phone: action.payload.phone,
                company: action.payload.company,
                website: action.payload.website
            }
        default:
            return state
    }
}