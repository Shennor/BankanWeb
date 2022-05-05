import axios from 'axios'
import {API, AUTH, BOARD, LIST, USER, WORKSPACE, CARD} from "../constants";
import {useContext} from "react"
import {UserContext} from "../context";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"

export const UserInstance = axios.create({
    baseURL: `${API}${USER}`
})

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

export const CardInstance = axios.create({
    baseURL: `${API}${CARD}`
})