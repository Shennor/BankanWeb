import React, {useContext, useEffect, useState} from "react";
import {IWorkspace} from "../data/DTO";
import {getWorkspace} from "../controllers/WorkspaceController";
import {useUser} from "./user";

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
    const [userInfo, setUserInfo] = useUser()

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    }, []);

    useEffect(() => {
        if(loaded) return
        refreshWorkspace(userInfo.id, setWorkspace)
        setLoaded(true)
    })

return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

