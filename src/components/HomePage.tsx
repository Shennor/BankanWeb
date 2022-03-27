import {getBoards} from "../controllers/BoardController";

interface HomePageProps{

}

export const HomePage = () => {
    getBoards()
    return(
        <div>

        </div>
    )
}