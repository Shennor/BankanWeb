import {API, AUTH} from "../constants"
import axios from "axios";
import {AuthInstance} from "./axios.instances";

interface ILoginResponse{
    accessToken: string,
    id: number,
    login: string,
    roles: string[],
    tokenType: string
}

export function login(username: string, password: string){
    AuthInstance.post(`signin`, {
        data: {login: username, password: password}
    })
}


export function register(username: string, email: string, password: string){
    AuthInstance.post(`signup`, {
        data: {
            username: username,
            login: email,
            password: password,
            role: ["user"]
        }
    })

}

export function logout(){

}

