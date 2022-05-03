import {AuthInstance, UserInstance} from "./axios.instances";
import {ILoginResponse} from "../data/DTO";
import {ErrorType, IError} from "./errors";
import {UserInfo} from "os";

export interface UserInfoResponse {
    id: number
    name: string
    registrationDate: number
}

export function instanceOfUserInfoResponse(object: any): object is UserInfoResponse {
    if(object === undefined) return false
    if('id' in object)
        if ('name' in object)
            if ('registrationDate' in object)
                return true
    return false
}

export async function getUserInfo(userId: number){
    try {
        let res = await UserInstance.get(`${userId}`)
        if (res.status == 401)
            return { type: ErrorType.unauthorized } as IError
        return res.data as UserInfoResponse
    }
    catch (error) {
        console.log(error)
        return undefined
    }
}

export async function login(username: string, password: string) {
    try {
        let res = await AuthInstance.post(`signin`, {
            login: username, password: password
        })
        return res.data as ILoginResponse
    } catch (error) {
        console.log(error)
        return undefined
    }
}

export async function register(username: string, email: string, password: string) {
    try {
        let res = await AuthInstance.post(`signup`, {
            username: username,
            login: email,
            password: password,
            role: ["user"]
        })
        return res.data as string
    } catch (error) {
        console.log(error)
        return undefined
    }
}


