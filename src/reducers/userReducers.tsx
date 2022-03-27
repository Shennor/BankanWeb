import {combineReducers} from "redux";
import {isLoggedReducer} from "./isLogged";
import {userIdReducer} from "./userId";
import {usernameReducer} from "./username";

export const UserReducers = combineReducers({
    isLogged: isLoggedReducer,
    userId: userIdReducer,
    username: usernameReducer
})