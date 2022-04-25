import React, {useContext, useEffect, useState} from "react";
import {IBoardInfo, IWorkspace} from "../data/DTO";
import {userInfo} from "os";
import {UserContext} from "../context";
import {getWorkspace} from "../controllers/WorkspaceController";

export const refreshWorkspace = (id : number, setWorkspace:  React.Dispatch<React.SetStateAction<IWorkspace>>) => {
    getWorkspace(id)
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
        refreshWorkspace(userInfo.id, setWorkspace)
        setLoaded(true)
    })

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

