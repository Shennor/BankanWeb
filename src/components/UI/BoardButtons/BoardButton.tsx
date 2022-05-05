import {FC, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {IBoardInfo} from "../../../data/DTO";

import "./board-buttons.css"
import Select from "react-select/base";

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

    const deleteBoard = () => {

    }

    return (
        <div className={"boardButton"}>
            {clicked && <Navigate to={`/board/${props.boardInfo.id}`}/>}
            <button onClick={() => setClicked(prev => true)} onAuxClick={() => setMenuVisibility(true)}>
                {props.boardInfo.name}
            </button>
            {/*{(menuVisibility)*/}
            {/*    ?*/}
            {/*    <div className={"boardMenu"} onBlur={() => setMenuVisibility(false)} >*/}
            {/*        <button className={"menuButton"} onClick={() => deleteBoard()}>Delete</button>*/}
            {/*    </div>*/}
            {/*    : <></>*/}
            {/*}*/}
        </div>
    )
}