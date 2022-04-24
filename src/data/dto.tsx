// CardButton
class CardInfo {
    id: number
    name: string
    color: number
    creationDate: Date
    deadline: Date | undefined
    creatorId: number
    cardContent: JSON

    constructor(id: number,
                name: string,
                color: number,
                creationDate: Date,
                deadline: Date | undefined,
                creatorId: number,
                cardContent: JSON) {
        this.id = id
        this.name = name
        this.color = color
        this.creationDate = creationDate
        this.deadline = deadline
        this.creatorId = creatorId
        this.cardContent = cardContent
    }
}

// List
class ListInfo {
    id: number
    name: string
    description: string
    creationDate: Date

    constructor(id: number,
                name: string,
                description: string,
                creationDate: Date) {
        this.id = id
        this.name = name
        this.description = description
        this.creationDate = creationDate
    }
}

// Board
class BoardInfo {
    id: number
    name: string
    description: string
    isOpen: boolean
    creationDate: Date

    constructor(id: number,
                name: string,
                description: string,
                isOpen: boolean,
                creationDate: Date) {
        this.id = id
        this.name = name
        this.description = description
        this.isOpen = isOpen
        this.creationDate = creationDate
    }
}

// Workspace
class WorkspaceInfo {
    id: number
    name: string

    constructor(id: number,
                name: string) {
        this.id = id
        this.name = name
    }
}

// Settings
class SettingsInfo {
    id: number
    userId: number
    settings: JSON

    constructor(id: number,
                userId: number,
                settings: JSON) {
        this.id = id
        this.userId = userId
        this.settings = settings
    }
}

// User
class UserInfo {
    id: number
    name: string
    registrationDate: Date

    constructor(id: number,
                name: string,
                registrationDate: Date) {
        this.id = id
        this.name = name
        this.registrationDate = registrationDate
    }
}

export{}