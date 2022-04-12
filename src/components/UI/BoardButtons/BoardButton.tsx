import {FC} from "react";
import {Link} from "react-router-dom";
import {IBoard} from "../../../data/DTO";

import "./board-buttons.css"

interface IBoardButtonProps {
    boardInfo: IBoard
}

export const BoardButton: FC<IBoardButtonProps> = (props) => {
    return (
        <div className={"boardButton"}>
            <button>
                <Link to={`/board/${props.boardInfo.id}`}>
                    {props.boardInfo.name}
                </Link>
            </button>
        </div>
    )
}