import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {IUserInfo} from "../data/DTO";
import {Action, createStore, Reducer, Store} from "redux";
import {configureStore} from "@reduxjs/toolkit";

export const SET_USER = "SET_USER"
export const UNSET_USER = "UNSET_USER"

interface ISetAction extends Action {
    new_user: IUserInfo
}

export function setUser(user: IUserInfo) {
    return {
        type: SET_USER,
        new_user: user
    }
}

export function unsetUser() {
    return {
        type: UNSET_USER
    }
}

const userReducer: Reducer = (state: IUserInfo, action: Action | ISetAction) => {
    switch (action.type) {
        case SET_USER:
            console.log("new_user" in action ? action.new_user : state)
            if ("new_user" in action) {
                return {...action.new_user}
            } else return {
                ...state
            }
        case
        UNSET_USER:
            return {
                ...state,
                id: -1,
                login: "",
                isLogged: false,
                username: "",
                token: ""
            } as IUserInfo
    }
}

const userManager = (state: IUserInfo, action: Action) => {
    return {
        user: userReducer(state, action),
    }
}

export const store: Store<IUserInfo> = configureStore({reducer: userReducer})

store.dispatch({type: UNSET_USER})
