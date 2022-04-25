import axios from 'axios'
import {API, AUTH, BOARD, LIST, WORKSPACE} from "../constants_utils";
import Cookies from 'js-cookie'

// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export const AuthInstance = axios.create({
    baseURL: `${API}${AUTH}`
})

export const WorkspaceInstance = axios.create({
    baseURL: `${API}${WORKSPACE}`,
})

export const BoardInstance = axios.create({
    baseURL: `${API}${BOARD}`,
})

export const ListInstance = axios.create({
    baseURL: `${API}${LIST}`,
})
