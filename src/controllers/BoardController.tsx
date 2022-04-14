import {BoardInstance, ListInstance} from "./axios.instances";
import {IBoard, ICard, IList, IWorkspace} from "../data/DTO";
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
    creationDate: bigint,
    isOpen: boolean
}

interface IListResponse {
    data: ICard[]
}

const sendListResponses = async (lists: IList[], token: string) => {
    const responses = [];
    ListInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    ListInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
    for (let i = 0; i < lists.length; i++) {
        responses.push(await ListInstance.get(`${lists[i].info.id}`));
    }
    return responses
}

export const getBoard = (boardId: number, token: string) => {
    BoardInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    BoardInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
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
    BoardInstance.get(`info/${boardId}`)
        .catch((error) => {
            console.log(error)
            return undefined
        })
        .then(response => response!.data as IBoardInfoResponse)
        .then(data => {
            board.info.id = boardId
            board.info.description = data.description
            board.info.name = data.name
            board.info.isOpen = data.isOpen
            board.info.creationData = data.creationDate
        })
    BoardInstance.get(`${boardId}`)
        .catch((error) => {
            console.log(error)
            return undefined
        })
        .then(response => response!.data as IListInfoResponse[])
        .then(data => {
            for (var i = 0; i < data.length; ++i) {
                board.lists.push({
                    cards: [],
                    info: {
                        id: data[i].first,
                        name: data[i].second.name,
                        description: data[i].second.description
                    }
                })
                console.log(board.lists.length)
            }
        })

    console.log(board.lists)

    console.log("1")
    const responses = sendListResponses(board.lists, token)
    console.log("2")

    responses.catch((error) => {
        console.log(error)
        return undefined
    })
        .then(responses => responses!
            .forEach((value, index) => {
                const data = value.data as IListResponse;
                const cards = data.data;
                board.lists[index].cards = cards
            })
        )
    return board

}
// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//