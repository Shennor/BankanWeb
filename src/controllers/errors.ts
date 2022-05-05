import {UserInfoResponse} from "./AuthController";


export enum ErrorType {
    unauthorized
}

export interface IError {
    errorType: ErrorType
}

export const instanceOfIError = (obj: any): obj is IError => {
    if(obj === undefined) return false
    if("errorType" in obj)
        return true
    return false
}