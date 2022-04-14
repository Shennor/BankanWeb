

export interface IUserInfo {
    token: string,
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
    creationData: number,
    deadline: number | undefined,
    creatorId: number,
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


