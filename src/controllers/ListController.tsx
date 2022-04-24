import {BoardInstance, ListInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import {ListInputButton} from "../components/UI/List/ListInputButton";

export const getLists = async (boardId: number, token: string) => {
    try {
        BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
        BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
        const response = await BoardInstance.get(`${boardId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.error(e)
        return undefined
    }
}

export const createList = async (name: string, description: string,
                                 boardId: number, token: string) => {
    try {
        ListInstance.defaults.headers.common["Authirization"] = `Bearer ${token}`
        ListInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
        const response = await ListInstance.post(`${boardId}`,
            {name: name, description: description})
        return response.status
    } catch (e) {
        console.error(e)
    }
}