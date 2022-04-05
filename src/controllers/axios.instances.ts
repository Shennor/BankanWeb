import axios from 'axios'
import {API, AUTH, WORKSPACE} from "../constants";
import {useContext} from "react"
import {UserContext} from "../context";

export const AuthInstance = axios.create({
    baseURL: `${API}${AUTH}`
})

export const WorkspaceInstance = axios.create({
    baseURL: `${API}${WORKSPACE}`
})