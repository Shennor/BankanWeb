import {BoardInstance, ListInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import {ListInputButton} from "../components/UI/List/ListInputButton";
import {List} from "../components/UI/List/List";
import {ErrorType, IError} from "./errors";

export const getLists = async (boardId: number, token: string) => {
    try {
        const response = await BoardInstance.get(`${boardId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.error(e)
        return undefined
    }
}

export const editList = async (listId: number, name?: string, description?: string) => {
    try{
        let data = {};
        if(name !== undefined && description !== undefined)
            data = {name: name, description: description}
        else if(name !== undefined)
            data = {name: name}
        else
            data = {description: description}
        const response = await ListInstance.patch(`edit/${listId}`, data)
        if(response.status == 401)
            return {errorType: ErrorType.unauthorized} as IError
        return response.status == 200
    }
    catch (error) {
        console.error(error)
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