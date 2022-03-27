import {Action, Reducer} from "@reduxjs/toolkit";

export const isLoggedReducer : Reducer<boolean, Action> =
    (state = false, action: Action) => {
    switch (action.type) {
        case "login":
            return true
        case "logout":
            return false
        default:
            return state
    }
}

