import {WorkspaceContext} from "../../../context";
import {useContext} from "react";
import {BoardButton} from "../BoardButtons/BoardButton";
import {CreateBoardButton} from "../BoardButtons/CreateBoardButton";

import "./boards-field.css"

export const BoardsField = () => {
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const boards = workspace.listOfBoardEntities

    return(
        <div className={"boardField"}>
            {boards.map(board => <BoardButton boardInfo={board}/>)}
            <CreateBoardButton/>
        </div>
    )
}