import {combineReducers} from "redux";
import {isLoggedReducer} from "./isLogged";
import {tokenReducer} from "./token";
import {userIdReducer} from "./userId";
import {usernameReducer} from "./username";

export const allReducers = combineReducers({
    isLogged: isLoggedReducer,
    token: tokenReducer,
    userId: userIdReducer,
    username: usernameReducer
})