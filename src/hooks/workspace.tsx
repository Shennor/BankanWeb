import React, {useContext, useEffect, useState} from "react";
import {IBoardInfo, IUserInfo, IWorkspace} from "../data/DTO";
import {userInfo} from "os";
import {UserContext} from "../context";
import {getWorkspace} from "../controllers/WorkspaceController";
import {ErrorType, instanceOfIError} from "../controllers/errors";

export const refreshWorkspace = (id: number, setWorkspace: React.Dispatch<React.SetStateAction<IWorkspace>>,
                                 setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>,
                                 setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    getWorkspace(id)
        .then((workspace) => {
            if (workspace === undefined) {
                alert("Something went wrong while trying to load workspace from server")
                return
            } else if (instanceOfIError(workspace)) {
                switch (workspace.errorType) {
                    case ErrorType.unauthorized:
                        setUserInfo(
                            {
                                username: "",
                                login: "",
                                id: -1,
                                isLogged: false,
                            }
                        )
                }
                if (setLoaded) {
                    setLoaded(true)
                }
                return
            }
            setWorkspace(workspace!)
            if (setLoaded) {
                setLoaded(true)
            }
        })
        .catch((error) => console.error(error))
}

export const useWorkspace = (userId: number,
                             setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>,
                             setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [workspace, setWorkspace] = useState<IWorkspace>({id: -1, name: "", listOfBoardEntities: []})

    useEffect(() => {
        refreshWorkspace(userId, setWorkspace, setUserInfo, setLoaded)
    }, [])

    return [workspace, setWorkspace] as [IWorkspace, React.Dispatch<React.SetStateAction<IWorkspace>>]
}

