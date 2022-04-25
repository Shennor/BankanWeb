import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {IUserInfo} from "../data/DTO";
import {Action, createStore, Reducer, Store} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {StateLoader} from "./state_loader";
import {useSelector} from "react-redux";

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
            return "new_user" in action ? action.new_user : state
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

const reducers = {
    user: userReducer
}

const stateLoader = new StateLoader();

export const store: Store<IUserInfo> = configureStore({
    reducer: userReducer,
    preloadedState: stateLoader.loadState()
})

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});

// store.dispatch({type: UNSET_USER})

store.subscribe(() => {
    //this is just a function that saves state to localStorage
    stateLoader.saveState(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch