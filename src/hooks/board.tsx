import React, {useContext, useEffect, useState} from "react";
import {IBoard, IBoardInfo, IList} from "../data/DTO";
import {UserContext} from "../context";
import {getBoard} from "../controllers/BoardController";


function refreshBoard(id: number, token: string, setBoard: any) {
    getBoard(id, token)
}

export const useBoard = () => {
    const [board, setBoard] = useState<IBoard>({
        info: {
            id: -1,
            name: "",
            description: "",
            isOpen: false,
            creationData: BigInt(0)
        }, lists: []
    })
    const [loaded, setLoaded] = useState(false)
    const [userInfo, ...other] = useContext(UserContext)!

    useEffect(() => {
        if(loaded) return
        refreshBoard(userInfo.id, userInfo.token, setBoard)
        setLoaded(true)
    })

    return [board, setBoard] as [IBoard, React.Dispatch<React.SetStateAction<IBoard>>]
}
