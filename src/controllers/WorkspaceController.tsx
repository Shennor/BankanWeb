import {WorkspaceInstance} from "./axios.instances";
import {IMedia, IWorkspace} from "../data/DTO";
import {ErrorType, IError} from "./errors";


export const getWorkspace = async (userId: number) => {
    try {
        const response = await WorkspaceInstance.get(`user/${userId}`)
        if (response.status === 401)
            return {errorType: ErrorType.unauthorized} as IError
        return response.data as IWorkspace
    } catch (e) {
        console.error(e)
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