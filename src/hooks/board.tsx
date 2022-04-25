import React, {useEffect, useState} from "react";
import {IBoard} from "../data/DTO";
import { getBoardRecursive} from "../controllers/BoardController";

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
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)

    useEffect(() => {
        if(loaded) return
        refreshBoard(userInfo.id, setBoard)
            .catch((e) => console.error("Error while loading board: " + e))
            .then()
        setLoaded(true)
    })

return [board, setBoard] as [IBoard, React.Dispatch<React.SetStateAction<IBoard>>]
}
