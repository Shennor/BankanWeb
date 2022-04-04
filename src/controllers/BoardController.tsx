import {API, WORKSPACE} from "../constants";
import {getToken} from "../tokenUtils";
import axios from "axios";
import {WorkspaceInstance} from "./axios.instances";

export interface Board{
    id: number
    name: string
    description: string
    isOpen: boolean
    creationData: bigint
}

interface Workspace{
    id: number,
    name: string,
    listOfBoardEntities: Board[]
}

// "Authorization": `Bearer ${token}`,
// "Content-Type": "application/json",
// "Connection": "keep-alive",


export const getBoards = () => {
    WorkspaceInstance.get('user/')
}


// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//