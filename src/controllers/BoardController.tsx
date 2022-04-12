import {BoardInstance, WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import {BoardInputButton} from "../components/UI/BoardButtons/BoardInputButton";

// "Content-Type": "application/json",
// "Connection": "keep-alive",

export const getBoards = (userId: number, token: string) => {
    WorkspaceInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    WorkspaceInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    return WorkspaceInstance.get(`user/${userId}`)
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}

export const createBoard = (name: string, description: string, workspaceId: number, token: string) => {
    BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    return BoardInstance.post(`${workspaceId}`, {
        name: name,
        description: description
    })
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}

// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//