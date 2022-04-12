import React, {useContext, useEffect, useState} from "react";
import {IBoard, IWorkspace} from "../data/DTO";
import {getBoards} from "../controllers/BoardController";
import {userInfo} from "os";
import {UserContext} from "../context";

export const refreshBoards = (id : number, token: string, setWorkspace:  React.Dispatch<React.SetStateAction<IWorkspace>>) => {
    getBoards(id, token)
        .then((workspace) => {
            setWorkspace(workspace!)
        })
        .catch((error) => alert("Can not load boards from server"))
}

export const useWorkspace = () => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})
    const [loaded, setLoaded] = useState(false)
    const [userInfo, other] = useContext(UserContext)!

    useEffect(() => {
        if(loaded) return
        refreshBoards(userInfo.id, userInfo.token, setWorkspace)
        setLoaded(true)
    })

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}