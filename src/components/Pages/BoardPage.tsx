import {useParams} from "react-router-dom";
import {refreshBoard, useBoard} from "../../hooks/board";
import {useContext, useState} from "react";

import "../../css/board-page.css"
import {ButtonBarBoard} from "../UI/ButtonBar/ButtonBar";
import {UserContext, BoardContext, WorkspaceContext} from "../../context";
import {ListsField} from "../UI/ListsField/ListsField";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import {BoardDescription} from "../UI/BoardDescription/BoardDescription";
import {BoardName} from "../UI/BoardName/BoardName";

export const BoardPage = (props: any) => {
    const id = useParams().id
    const [loaded, setLoaded] = useState(false)
    const [board, setBoard] = useBoard(id as unknown as number, setLoaded)
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!

    let boardContent =
        <BoardContext.Provider value={[board, setBoard]}>
        <div className={"topRow"}>
           <BoardName/>
            <p className={"creationInfo"}>created somewhen by someone</p>
        </div>
        <div className={"middleRow"}>
            <BoardDescription/>
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
        <ListsField/>
    </BoardContext.Provider>

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            {(loaded) ?
            boardContent
            :
            <LoadingSpinner/>}
        </div>
    )
}