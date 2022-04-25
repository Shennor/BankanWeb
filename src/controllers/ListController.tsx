import {BoardInstance, ListInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import {ListInputButton} from "../components/UI/List/ListInputButton";

export const getLists = async (boardId: number, token: string) => {
    try {
        const response = await BoardInstance.get(`${boardId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.error(e)
        return undefined
    }
}

export const createList = async (name: string, description: string, boardId: number) => {
    try {
        const response = await ListInstance.post(`${boardId}`,
            {name: name, description: description})
        return response.status
    } catch (e) {
        console.error(e)
    }
}