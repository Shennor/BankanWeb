
export interface ILoginResponse {
    accessToken: string,
    id: number,
    login: string,
    username: string,
    roles: string[],
    tokenType: string
}

export interface IBoard {
    id: number
    name: string
    description: string
    isOpen: boolean
    creationData: bigint
}

export interface IWorkspace {
    id: number,
    name: string,
    listOfBoardEntities: IBoard[]
}
