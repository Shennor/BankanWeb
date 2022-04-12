import "./board-buttons.css"
import React, {FC, FormEvent, useContext, useState} from "react";
import {UserContext, WorkspaceContext} from "../../../context";
import {ILoginInput} from "../../Forms/LoginForm";
import {createBoard} from "../../../controllers/BoardController";
import {refreshBoards} from "../../../hooks/boards";

interface IBoardInputButtonProps {
    setCreationState: React.Dispatch<React.SetStateAction<boolean>>
}

export const BoardInputButton: FC<IBoardInputButtonProps> = (props: IBoardInputButtonProps) => {
    const [input, setInput] = useState({boardName: ""})
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!

    function boardCreation(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("createBoard called")
        createBoard(input.boardName, "", workspace.id, userInfo.token)
            .catch(() => alert("Server error while trying to create board."))
            .then(() => refreshBoards(userInfo.id, userInfo.token, setWorkspace))
            .catch(() => alert("Error while updating new workspace from server to client."))
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