import {WorkspaceInstance} from "./axios.instances";
import {IMedia, IWorkspace} from "../data/DTO";
import {ErrorType, IError} from "./errors";


export const getWorkspace = async (userId: number) => {
    try {
        const response = await WorkspaceInstance.get(`user/${userId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.error(e)
        if(e instanceof Error) {
            console.error(e.message)
            if(e.message.toString().search("401") != -1)
            return {errorType: ErrorType.unauthorized} as IError
        }
        return undefined
    }
}

export const getAllMedia = async (workspaceId: number) => {
    try {
        const resp = await WorkspaceInstance.get(`media/${workspaceId}`)
        if(resp.status === 401)
            return {errorType: ErrorType.unauthorized} as IError
        return resp.data as IMedia
    } catch (error) {
        console.error(error)
        return undefined
    }
}