import {AuthInstance} from "./axios.instances";
import {ILoginResponse} from "../data/DTO";

export function login(username: string, password: string) {
    let res = AuthInstance.post(`signin`, {
        login: username, password: password
    })
        .then((response) => response.data as ILoginResponse
        )
        .catch((error) => {
            console.log(error)
            return undefined
        })
    return res
}


export function register(username: string, email: string, password: string) {
    return AuthInstance.post(`signup`, {
        username: username,
        login: email,
        password: password,
        role: ["user"]
    })
        .then(function (response) {
            return response.data as string
        })
        .catch(function (error) {
            console.log(error)
        })

}


