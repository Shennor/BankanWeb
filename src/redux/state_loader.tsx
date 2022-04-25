import {IUserInfo} from "../data/DTO";

export class StateLoader {
    loadState() {
        try {
            console.log("loadState called")
            let serializedState = localStorage.getItem("store");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }
    saveState(state: IUserInfo) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("store", serializedState);

        }
        catch (err) {
        }
    }
    initializeState() {
        console.log("initializeState called")
        return {
            id: -1,
            login: "",
            isLogged: false,
            username: "",
            token: ""
        } as IUserInfo
    };
}