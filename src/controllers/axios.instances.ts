import axios from 'axios'
import {API, AUTH, WORKSPACE} from "../constants";


export const AuthInstance = axios.create({
    baseURL: `${API}${AUTH}`
})

export const WorkspaceInstance = axios.create({
    baseURL: `${API}${WORKSPACE}`
})