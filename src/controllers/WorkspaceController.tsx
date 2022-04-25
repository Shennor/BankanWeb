import {WorkspaceInstance} from "./axios.instances";
import {IWorkspace} from "../data/DTO";
import axios from "axios";
import Cookies from "js-cookie";
import {store} from "../redux/store";


export const getWorkspace = async (userId: number) => {
    try {
        WorkspaceInstance.defaults.headers.common["Authorization"] = `Bearer ${store.getState().token}`
        const response = await WorkspaceInstance.get(`user/${userId}`)
        return response.data as IWorkspace
    } catch (e) {
        console.log(e)
    }
}