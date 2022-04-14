import {BoardInstance} from "./axios.instances";
import {IBoard, IWorkspace} from "../data/DTO";
import {BoardInputButton} from "../components/UI/BoardButtons/BoardInputButton";

// "Content-Type": "application/json",
// "Connection": "keep-alive",

export const createBoard = (name: string, description: string, workspaceId: number, token: string) => {
    BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    return BoardInstance.post(`${workspaceId}`, {
        name: name,
        description: description
    })
        .then((response) => response.data as IWorkspace)
        .catch((error) => {
            console.log(error)
            return undefined
        })
}

interface IListInfoResponse {
    first: number,
    second: {
        name: string,
        description: string
    }
}

interface IBoardInfoResponse {
    name: string,
    description: string,
    creationDate: string,
    isOpen: boolean
}

interface IGetBoardResponse {
    lists: IListInfoResponse[]
}

export const getBoard = (boardId: number, token: string) => {
    BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    let board: IBoard;
    BoardInstance.get(`info/${boardId}`)
        .catch((error) => {
            console.log(error)
            return undefined
        })
        .then(response => response!.data as IBoardInfoResponse)
        .then()

    BoardInstance.get(`${boardId}`)
        .catch((error) => {
            console.log(error)
            return undefined
        })
        .then(response => response!.data as IGetBoardResponse)
        .then(getBoardResp => console.log(getBoardResp))

}
// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//