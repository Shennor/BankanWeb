import {useParams} from "react-router-dom";
import {useBoard} from "../../hooks/board";


export const BoardPage = () => {
    const {id} = useParams()
    const [board, setBoard] = useBoard()

    return(
        <div>

        </div>
    )
}