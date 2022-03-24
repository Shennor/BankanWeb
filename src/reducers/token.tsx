import {IAuthAction} from "../actions/authAction";
import {Reducer} from "@reduxjs/toolkit";

export const tokenReducer : Reducer<string, IAuthAction> = (state = "", action: IAuthAction) => {
    switch (action.type) {
        case "login":
            return action.token
        case "logout":
            return ""
        default:
            return state
    }
}