import {WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";


export const getWorkspace = (userId: number) => {
    return WorkspaceInstance.get(`user/${userId}`)
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}