import {BoardInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";

export const getLists = (boardId: number, token: string) => {
    BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    return BoardInstance.get(`${boardId}`)
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}