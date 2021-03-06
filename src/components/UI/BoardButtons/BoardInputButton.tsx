import "./board-buttons.css"
import React, {FC, FormEvent, useContext, useState} from "react";
import {WorkspaceContext} from "../../../context";
import {createBoard} from "../../../controllers/BoardController";
import {refreshWorkspace} from "../../../hooks/workspace";

interface IBoardInputButtonProps {
    setCreationState: React.Dispatch<React.SetStateAction<boolean>>
}

export const BoardInputButton: FC<IBoardInputButtonProps> = (props: IBoardInputButtonProps) => {
    const [input, setInput] = useState({boardName: ""})
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!

    function boardCreation(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("createBoard called")
        createBoard(input.boardName, "", workspace.id)
            .catch(() => alert("Server error while trying to create board."))
            .then(() => refreshWorkspace(userInfo.id, setWorkspace))
            .catch(() => alert("Error while updating new workspace from server to client."))
        props.setCreationState((perv) => false)
    }

    return (
        <div className={"boardButton"}>
            <button>
                <form className={"boardInput"} onSubmit={boardCreation}
                      onBlur={() => {props.setCreationState((prev: boolean) => false)}}>
                    <input type="text" id={"auto-focused-input"} placeholder="New board name" required={true} maxLength={40}
                           onChange={(e) => {
                               input.boardName = e.target.value
                           }} autoFocus={true}/>
                </form>
            </button>
        </div>
    )
}