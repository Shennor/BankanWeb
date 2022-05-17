export interface IUserInfo {
    id: number,
    login: string,
    isLogged: boolean,
    username: string,
}

export interface ILoginResponse {
    accessToken: string,
    id: number,
    login: string,
    username: string,
    roles: string[],
    tokenType: string
}

export interface IBoardInfo {
    id: number
    name: string
    description: string
    isOpen: boolean
    creationData: bigint
}

export interface IWorkspace {
    id: number,
    name: string,
    listOfBoardEntities: IBoardInfo[]
}

export interface IListInfo {
    id: number,
    name: string,
    description: string
}

export interface ICard {
    id: number,
    name: string,
    color: number | undefined,
    creationData: Date,
    deadline: number | undefined,
    creatorId: Date,
    cardContent: string | undefined
}

export interface IList {
    info: IListInfo,
    cards: ICard[]
}

export interface IBoard {
    info: IBoardInfo,
    lists: IList[]
}

export interface IListInBoard {
    boardId: number,
    listEntity: IListInfo
}


export interface ICardInBoard {
    boardId: number,
    listId: number,
    cardEntity: ICard
}

export interface IMedia {
    boards: IBoardInfo[]
    lists: IListInBoard[]
    cards: ICardInBoard[]
}


