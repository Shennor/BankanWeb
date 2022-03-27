import {API, AUTH} from "../constants"
import {userStore} from "../index"
import {IAuthAction} from "../actions/authAction"

interface ILoginResponse{
    accessToken: string,
    id: number,
    login: string,
    roles: string[],
    tokenType: string
}

export function login(username: string, password: string){
    fetch(`${API}${AUTH}signin`,
        {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive"
            },
            body: JSON.stringify({"login" : username, "password": password})
        })
        .then(async res => await res.json() as ILoginResponse)
        .then(body => {
            document.cookie = `token=${body.accessToken}`
            const action: IAuthAction = {
                type: "login",
                username: body.login,
                userId: body.id
            }
            userStore.dispatch(action)
        })
}

export function register(username: string, email: string, password: string){
    fetch(
        `${API}${AUTH}signup`,
        {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive"
            },
            body: `"login": ${email},
                   "password": ${password},
                   "username": ${username},
                   "role": ["user"]`
        })
}

export function logout(){
    let action : IAuthAction = {
        type: "logout",
        username: "",
        userId: -1
    }
    userStore.dispatch(action)
    document.cookie = "token="
}
