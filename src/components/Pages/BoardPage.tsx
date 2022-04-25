import {useParams} from "react-router-dom";
import {refreshBoard, useBoard} from "../../hooks/board";

import "../../css/board-page.css"
import {ButtonBarBoard} from "../UI/ButtonBar/ButtonBar";
import {WorkspaceContext} from "../../context";
import {ListsField} from "../UI/ListsField/ListsField";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {useWorkspace} from "../../hooks/workspace";
import {useContext, useEffect, useState} from "react";
import {useUser} from "../../hooks/user";

export const BoardPage = (props: any) => {
    const id = useParams().id
    const [board, setBoard] = useBoard(id as unknown as number)
    const [userInfo, setUserInfo] = useUser()
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
        setChanged(false)
    }, [changed]);

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        setChanged(true)
    }, [userInfo.isLogged])

    const [workspace, setWorkspace] = useWorkspace()

    let element = (board.info.id != -1)? <>
        <div className={"topRow"}>
            <h1 className={"boardName"}>Board name</h1>
            <p className={"creationInfo"}>created</p>
        </div>
        <div className={"middleRow"}>
            <div className={"descriptionPart"}>
                <h3>Description</h3>
                <div className={"textField"}>
                    <p className={"textInField"}>
                        {board.info.description}
                    </p>
                    <button className={"editButton"}>
                        <img/>
                    </button>
                </div>
            </div>
            <div className={"collaboratorsPart"}>
                <div className={"collaboratorsRow"}>
                    <h3>Collaborators</h3>
                    <button className={"inviteButton"}>invite</button>
                </div>
                <div className={"textField"}>
                    <p className={"textInField"}>
                        {userInfo.username}
                    </p>
                </div>
            </div>
        </div>
        <ButtonBarBoard/>
        <ListsField board={board} setBoard={setBoard}/>
    </>
        : <p>Loading...</p>

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
                {element}
            </WorkspaceContext.Provider>
        </div>
    )
}