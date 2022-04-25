import {WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import axios from "axios";
import Cookies from "js-cookie";


export const getWorkspace = (userId: number) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    return WorkspaceInstance.get(`user/${userId}`)
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}