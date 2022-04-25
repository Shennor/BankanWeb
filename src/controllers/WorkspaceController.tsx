import {WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import axios from "axios";
import Cookies from "js-cookie";


export const getWorkspace = async (userId: number) => {
    try {
        WorkspaceInstance.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(localStorage.getItem("userInfo")!).token}`
        const response = await WorkspaceInstance.get(`user/${userId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.log(e)
    }
}