import {combineReducers} from "redux";
import {postReducer} from "./posts";
import {usersReducer} from "./users";


export const reducers = combineReducers({
    posts: postReducer,
    users: usersReducer
})

