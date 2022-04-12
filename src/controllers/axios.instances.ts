import axios from 'axios'
import {API, AUTH, BOARD, LIST, WORKSPACE} from "../constants";
import {useContext} from "react"
import {UserContext} from "../context";

export const AuthInstance = axios.create({
    baseURL: `${API}${AUTH}`
})

export const WorkspaceInstance = axios.create({
    baseURL: `${API}${WORKSPACE}`
})

export const BoardInstance = axios.create({
    baseURL: `${API}${BOARD}`
})

export const ListInstance = axios.create({
    baseURL: `${API}${LIST}`
})
