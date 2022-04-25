import React, {FC, FormEvent, useContext, useState} from "react";
import {UpdateContext, WorkspaceContext} from "../../../context";
import {createList} from "../../../controllers/ListController";
import {IBoard, IBoardInfo, IList} from "../../../data/DTO";
import {refreshWorkspace} from "../../../hooks/workspace";
import {refreshBoard} from "../../../hooks/board";

interface IListInputButtonProps {
    setCreationState: React.Dispatch<React.SetStateAction<boolean>>
    board: IBoard
    setBoard: React.Dispatch<React.SetStateAction<IBoard>>
}

export const ListInputButton: FC<IListInputButtonProps> = (props: IListInputButtonProps) => {
    const [input, setInput] = useState({name: "", description: ""})
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)

    function listCreation(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("createList called")
        createList(input.name, input.description, props.board.info.id)
            .catch(() => alert("Server error while trying to create list."))
            .then(() => refreshBoard(userInfo.id, props.setBoard))
            .catch(() => alert("Error while updating new workspace from server to client."))
        props.setCreationState((prev) => false)
    }

    return (
        <div className={"listField"} tabIndex={3}>
            <button>
                <form className={"listInput"} onSubmit={listCreation}>
                    <input type="text" placeholder="Name" required={true}
                           maxLength={40}
                           onChange={(e) => {
                               input.name = e.target.value
                           }} tabIndex={1}/>
                    <input type="text" placeholder="Description" required={true}
                           maxLength={500}
                           onChange={(e) => {
                               input.description = e.target.value
                           }} tabIndex={2}/>
                    <button type={"submit"}>
                        Ok
                    </button>
                    <button onClick={() => props.setCreationState(prev => false)}>
                        Cancel
                    </button>
                </form>
            </button>
        </div>
    )
}