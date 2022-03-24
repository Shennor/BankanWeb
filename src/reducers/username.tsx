import {IAuthAction} from "../actions/authAction";
import {Reducer} from "@reduxjs/toolkit";

export const usernameReducer : Reducer<string, IAuthAction> = (state = "", action: IAuthAction) => {
    switch (action.type) {
        case "login":
            return action.username
        case "logout":
            return ""
        default:
            return state
    }
}