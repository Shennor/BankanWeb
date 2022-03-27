import {getBoards} from "../controllers/BoardController";
import {useState} from "react";
import {BoardButton} from "./UI/BoardButton";

interface HomePageProps{

}

export const HomePage = () => {
    const [boards, setBoards] = useState(getBoards())

    return(
        <div>
            {boards.then(boards => boards.map(board => <BoardButton boardInfo={board}/>))}
        </div>
    )
}