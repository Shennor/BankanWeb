import React, {useContext, useEffect, useState} from "react";
import {IBoard, IBoardInfo, IList} from "../data/DTO";
import {UserContext} from "../context";
import {getBoard, getBoardRecursive} from "../controllers/BoardController";
import {refreshWorkspace} from "./workspace";

export async function refreshBoard(id: number, setBoard: React.Dispatch<React.SetStateAction<IBoard>>) {
    const board = await getBoardRecursive(id)
    setBoard(prev => board)
}

export const useBoard = (id: number) => {
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
    const [userInfo, other] = useContext(UserContext)!

    useEffect(() => {
        if(loaded) return
        refreshBoard(userInfo.id, setBoard)
            .catch((e) => console.error("Error while loading board: " + e))
            .then()
        setLoaded(true)
    })

return [board, setBoard] as [IBoard, React.Dispatch<React.SetStateAction<IBoard>>]
}
