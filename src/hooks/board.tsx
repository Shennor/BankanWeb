import React, {useContext, useEffect, useState} from "react";
import {IBoard, IBoardInfo, IList} from "../data/DTO";
import {UserContext} from "../context";
import {getBoard, getBoardRecursive} from "../controllers/BoardController";

export async function refreshBoard(id: number, token: string, setBoard: React.Dispatch<React.SetStateAction<IBoard>>) {
    const board = await getBoardRecursive(id, token)
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

    const [userInfo, ...other] = useContext(UserContext)!

    // useEffect(() => {
    //     refreshBoard(id, userInfo.token, setBoard).catch(() => {
    //         setLoaded(false)
    //         alert("Cannot load board from server")
    //     })
    //         .then(() => {
    //             console.log("Board loaded")
    //             console.log(board);
    //             setLoaded(true)
    //         })
    // }, [board])

return [board, setBoard] as [IBoard, React.Dispatch<React.SetStateAction<IBoard>>]
}
