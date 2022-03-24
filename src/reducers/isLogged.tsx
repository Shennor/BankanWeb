import {Action, configureStore, Reducer} from "@reduxjs/toolkit";
import {IAuthAction} from "../actions/authAction";

export const isLoggedReducer : Reducer<boolean, IAuthAction> =
    (state = false, action: IAuthAction) => {
    switch (action.type) {
        case "login":
            return true
        case "logout":
            return false
        default:
            return state
    }
}

