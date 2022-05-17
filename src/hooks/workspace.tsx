import React, {useContext, useEffect, useState} from "react";
import {IBoardInfo, IWorkspace} from "../data/DTO";
import {userInfo} from "os";
import {UserContext} from "../context";
import {getWorkspace} from "../controllers/WorkspaceController";
import {instanceOfIError} from "../controllers/errors";

export const refreshWorkspace = (id : number, setWorkspace:  React.Dispatch<React.SetStateAction<IWorkspace>>,
                                 setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    getWorkspace(id)
        .then((workspace) => {
            if(workspace === undefined || instanceOfIError(workspace)) {
                alert("Something went wrong while trying to load workspace from server")
                return
            }
            setWorkspace(workspace!)
            if (setLoaded) {
                setLoaded(true)
            }
        })
        .catch((error) => console.error(error))
}

export const useWorkspace = (userId: number, setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})

    useEffect(() => {
        refreshWorkspace(userId, setWorkspace, setLoaded)
    }, [])

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

