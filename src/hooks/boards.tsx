import React, {useContext, useEffect, useState} from "react";
import {IBoard, IWorkspace} from "../data/DTO";
import {getBoards} from "../controllers/BoardController";
import {userInfo} from "os";
import {UserContext} from "../context";


export const useWorkspace = () => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})
    const [loaded, setLoaded] = useState(false)
    const [userInfo, other] = useContext(UserContext)!

    const refreshBoards = (id : number, token: string) => {
        getBoards(id, token)
            .then((workspace) => {
                setWorkspace(workspace!)
            })
            .catch((error) => alert("Can not load boards from server"))
    }

    useEffect(() => {
        if(loaded) return
        refreshBoards(userInfo.id, userInfo.token)
        setLoaded(true)
    })

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}