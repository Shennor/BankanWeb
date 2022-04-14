import {FC, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {IBoardInfo} from "../../../data/DTO";

import "./board-buttons.css"

interface IBoardButtonProps {
    boardInfo: IBoardInfo
}

export const BoardButton: FC<IBoardButtonProps> = (props) => {
    const [clicked, setClicked] = useState(false)

    return (
        <div className={"boardButton"}>
            {clicked && <Navigate to={`/board/${props.boardInfo.id}`}/>}
            <button onClick={() => setClicked(prev => true)}>
                {props.boardInfo.name}
            </button>
        </div>
    )
}