import React, {useContext, useEffect, useState} from "react";
import {IBoardInfo, IWorkspace} from "../data/DTO";
import {userInfo} from "os";
import {UserContext} from "../context";
import {getWorkspace} from "../controllers/WorkspaceController";

export const refreshWorkspace = (id : number, setWorkspace:  React.Dispatch<React.SetStateAction<IWorkspace>>,
                                 setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    getWorkspace(id)
        .then((workspace) => {
            setWorkspace(workspace!)
            if (setLoaded) {
                setLoaded(true)
            }
        })
        .catch((error) => alert("Can not load boards from server"))
}

export const useWorkspace = (userId: number, setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})

    useEffect(() => {
        refreshWorkspace(userId, setWorkspace, setLoaded)
    }, [])

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

