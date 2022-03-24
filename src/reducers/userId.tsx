import {IAuthAction} from "../actions/authAction";
import {Reducer} from "@reduxjs/toolkit";


export const userIdReducer : Reducer<number, IAuthAction> = (state = -1, action: IAuthAction) => {
    switch (action.type) {
        case "login":
            return action.userId
        case "logout":
            return -1
        default:
            return state
    }
}