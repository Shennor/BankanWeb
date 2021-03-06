import {BoardInstance, ListInstance} from "./axios.instances";
import {IBoard, ICard, IList, IWorkspace} from "../data/DTO";
import {BoardInputButton} from "../components/UI/BoardButtons/BoardInputButton";
import axios from "axios";
import Cookies from "js-cookie";

// "Content-Type": "application/json",
// "Connection": "keep-alive",


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
    creationDate: bigint,
    isOpen: boolean
}

interface ICardData {
    data: ICard[]
}

interface IListResponse {
    data: ICardData
}


export const createBoard = async (name: string, description: string, workspaceId: number) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    try {
        const response = await BoardInstance.post(`${workspaceId}`, {
            name: name,
            description: description
        })
        return response.data as IWorkspace
    } catch (error) {
        console.log(error)
        return undefined
    }
}
// Promise.all()

export const getBoardInfo = async (boardId: number) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    try {
        const response = await BoardInstance.get(`info/${boardId}`)
        return response.data as IBoardInfoResponse
    } catch (error) {
        console.error(error)
        return undefined
    }
}

export const getBoard = async (boardId: number) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    try {
        const lists = await BoardInstance.get(`${boardId}`)
        return lists.data as IListInfoResponse[]
    } catch (error) {
        console.error(error)
        return undefined
    }
}

const getLists = async (lists: IList[]) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    const responses = [];
    for (let i = 0; i < lists.length; i++) {
        responses.push(ListInstance.get(`${lists[i].info.id}`));
    }
    return await Promise.all(responses) as IListResponse[]
}

export const getBoardRecursive = async (boardId: number) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get("token")}`
    let board: IBoard = {
        info: {
            id: -1,
            name: "",
            description: "",
            isOpen: false,
            creationData: BigInt(0)
        },
        lists: [] as IList[]
    }
    const boardInfoResponse = await getBoardInfo(boardId)
    board.info.id = boardId
    board.info.description = boardInfoResponse!.description
    board.info.name = boardInfoResponse!.name
    board.info.isOpen = boardInfoResponse!.isOpen
    board.info.creationData = boardInfoResponse!.creationDate
    const data = await getBoard(boardId)
    for (var i = 0; i < data!.length; ++i) {
        board.lists.push({
            cards: [],
            info: {
                id: data![i].first,
                name: data![i].second.name,
                description: data![i].second.description
            }
        })
    }
    const lists = await getLists(board.lists)
    lists.forEach((value, index) => {
        board.lists[index].cards = value.data.data
    })
    return board
}

// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//