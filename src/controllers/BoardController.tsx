import {userStore} from "../index";
import {API, WORKSPACE} from "../constants";
import {getToken} from "../tokenUtils";

export interface Board{
    id: number
    name: string
    description: string
    isOpen: boolean
    creationData: bigint
}

interface Workspace{
    id: number,
    name: string,
    listOfBoardEntities: Board[]
}

export const getBoards = () => {
    let token = getToken()
    let userId = userStore.getState().userId
    // axios - 401 -> refresh (interceptor)


    return fetch(`${API}${WORKSPACE}user/${userId}`,
        {
            mode: "cors",
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                },
        })
        .then(async res => await res.json() as Workspace)
        .then(workspace => workspace.listOfBoardEntities)
}


// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//