import {WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";

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


// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//