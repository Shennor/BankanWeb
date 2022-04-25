import React, {useEffect, useState} from "react";
import {IWorkspace} from "../data/DTO";
import {userInfo} from "os";
import {getWorkspace} from "../controllers/WorkspaceController";

export const refreshWorkspace = async (id: number, setWorkspace: React.Dispatch<React.SetStateAction<IWorkspace>>) => {
    try {
        const workspace = await getWorkspace(id)
        setWorkspace(workspace!)

    } catch (error) {
        alert("Can not load boards from server")
    }
}

export const useWorkspace = () => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})
    const [loaded, setLoaded] = useState(false)
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)

    useEffect(() => {
        refreshWorkspace(userInfo.id, setWorkspace)
            .then(() => setLoaded(true))
    }, [!loaded])

    return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

