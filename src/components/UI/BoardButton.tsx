import {FC} from "react";
import {Board} from "../../controllers/BoardController";
import {Link} from "react-router-dom";

interface IBoardButtonProps {
    boardInfo: Board
}

export const BoardButton: FC<IBoardButtonProps> = (props) => {
    return (
        <div className={"boardButton"}>
            <Link to={`/board/${props.boardInfo.id}`}>
                {props.boardInfo.name}
            </Link>
        </div>
    )
}