import {useParams} from "react-router-dom";
import {refreshBoard, useBoard} from "../../hooks/board";
import {useContext, useEffect, useState} from "react";

import "../../css/board-page.css"
import {ButtonBarBoard} from "../UI/ButtonBar/ButtonBar";
import {userInfo} from "os";
import {UserContext, WorkspaceContext} from "../../context";
import {List} from "../UI/List/List";
import {ListsField} from "../UI/ListsField/ListsField";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {useWorkspace} from "../../hooks/workspace";

export const BoardPage = (props: any) => {
    const id = useParams().id
    const [board, setBoard] = useBoard(id as unknown as number)
    const [userInfo, setUserInfo] = useContext(UserContext)!
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
        <ListsField board={board}/>
    </>
        : <p>Loading...</p>

    useEffect(() => {
            refreshBoard(id as unknown as number, userInfo.token, setBoard).then(() => {
                console.log("board refreshed")
                console.log(board)
            })
                .catch(error => console.error(error))
    }, [board])

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
                {element}
            </WorkspaceContext.Provider>
        </div>
    )
}