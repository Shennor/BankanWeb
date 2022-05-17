import React, {useEffect, useState} from "react";
import {IMedia} from "../data/DTO";
import {getAllMedia, getWorkspace} from "../controllers/WorkspaceController";
import {instanceOfIError} from "../controllers/errors";

export async function refreshMedia(workspaceId: number, setMedia: React.Dispatch<React.SetStateAction<IMedia>>,
                                   setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) {
    getAllMedia(workspaceId)
        .then((media) => {
            if(media === undefined || instanceOfIError(media)) {
                alert("Something went wrong while trying to load all media from server")
                if (setLoaded) {
                    setLoaded(true)
                }
                return
            }
            setMedia(media)
            if (setLoaded) {
                setLoaded(true)
            }
        })
        .catch((error) => console.error(error))
}

export const useMedia = (workspaceId: number, setLoaded?: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [media, setMedia] = useState({boards: [], lists: [], cards: []} as IMedia)

    useEffect(() => {
        refreshMedia(workspaceId, setMedia, setLoaded)
    }, [])

    return [media, setMedia] as [IMedia, React.Dispatch<React.SetStateAction<IMedia>>]
}