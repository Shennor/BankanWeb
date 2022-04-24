import {WorkspaceContext} from "../../../context";
import React, {FC, useContext, useState} from "react";
import {BoardButton} from "../BoardButtons/BoardButton";
import {CreateBoardButton} from "../BoardButtons/CreateBoardButton";

import "./boards-field.css"
import {BoardInputButton} from "../BoardButtons/BoardInputButton";

interface IBoardsFieldProps {
}

export const BoardsField: FC<IBoardsFieldProps> = (props: IBoardsFieldProps) => {
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const boards = workspace.listOfBoardEntities
    const [boardCreatingState, setBoardCreatingState] = useState(false)

    const boardInput = () => {
        if (boardCreatingState)
            return <BoardInputButton setCreationState={setBoardCreatingState}/>
        return <></>
    }

    return (
        <div className={"boardField"}>
            {boards.map(board => <BoardButton key={board.id} boardInfo={board}/>)}
            {boardInput()}
            <CreateBoardButton setState={setBoardCreatingState}/>
        </div>
    )
}