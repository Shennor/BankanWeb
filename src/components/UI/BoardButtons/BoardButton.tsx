import React, {FC, useContext, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {IBoardInfo} from "../../../data/DTO";

import "./board-buttons.css"
import Select from "react-select/base";
import {EditIcon} from "../../../images/images";
import {deleteBoard} from "../../../controllers/BoardController";
import {refreshWorkspace} from "../../../hooks/workspace";
import {WorkspaceContext} from "../../../context";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface IBoardButtonProps {
    boardInfo: IBoardInfo
}

const options = [
    {value: "delete", label: "Delete"},
]

export const BoardButton: FC<IBoardButtonProps> = (props) => {
    const [clicked, setClicked] = useState(false)
    const [menuVisibility, setMenuVisibility] = useState(false)
    const [menuInput, setMenuInput] = useState("")
    const [loaded, setLoaded] = useState(true)
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!


    const deleteCurrentBoard = () => {
        deleteBoard(props.boardInfo.id)
            .then(res => {
                if (res === true) {
                    console.log("Board deleted successfully")
                    setLoaded(false)
                    refreshWorkspace(workspace.id, setWorkspace, setLoaded)
                } else {
                    alert("Something went wrong while trying to delete board")
                }
            })
            .catch(error => console.error(error))
        setMenuVisibility(false)
    }

    return (
        <div className={"boardButton"}>
            {clicked && <Navigate to={`/board/${props.boardInfo.id}`}/>}
            {(!loaded) ?
                <LoadingSpinner/>
                :
                (menuVisibility)
                    ?
                    <div className={"boardMenu"}>
                        <button className={"menuButton"} onClick={() => deleteCurrentBoard()}>Delete</button>
                        <button className={"menuButton"} onClick={() => setMenuVisibility(false)}>Cancel</button>
                    </div>
                    :
                    <button className={"board"} onClick={() => setClicked(prev => true)}
                            onAuxClick={(e) => {
                                e.preventDefault();
                                setMenuVisibility(true)
                            }}>
                        {props.boardInfo.name}
                    </button>
            }
        </div>
    )
}