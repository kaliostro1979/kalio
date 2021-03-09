import {combineReducers} from "redux";
import {postReducer} from "./posts";
import {usersReducer} from "./users";
import {profileReducer} from "./profile";
import {userPostsReducer} from "./userPosts";


export const reducers = combineReducers({
    posts: postReducer,
    users: usersReducer,
    profile: profileReducer,
    userPosts: userPostsReducer,
})

