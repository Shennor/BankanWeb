import {useContext, useState} from "react";
import {BoardContext} from "../../../context";
import {editBoard} from "../../../controllers/BoardController";
import {refreshBoard} from "../../../hooks/board";
import "./boardName.css"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {EditIcon} from "../../../images/images";


export const BoardName = () => {
    const [board, setBoard] = useContext(BoardContext)!
    const [isBeingEdited, setEdition] = useState(false)
    const [input, setInput] = useState("")
    const [loaded, setLoaded] = useState(true)

    const editName = () => {
        editBoard(board.info.id, input, board.info.description)
            .then(res => {
                if (res === true) {
                    console.log("Board name changed successfully")
                    setLoaded(false)
                    refreshBoard(board.info.id, setBoard, setLoaded)
                        .catch(error => console.error(error))
                } else {
                    alert("Something went wrong while trying to edit board name")
                }
            })
            .catch((error) => {
                console.error(error)
            })
        setEdition(false)
    }

    return (<div className={"nameField"}>
            {(!isBeingEdited) ?
                <> {(loaded) ?
                    <h1 className={"boardName"}>{board.info.name}</h1>
                    :
                    <LoadingSpinner/>
                }
                </>
                :
                <input type={"text"} value={input} autoFocus={true}
                       onChange={(e) => setInput(e.target.value)}
                       onBlur={() => editName()} className={"nameInput"}/>
            }
            <button className={"editButton"} onClick={() => {
                setInput(board.info.name);
                setEdition(true)
            }}>
                <img src={EditIcon}/>
            </button>
    </div>
    )
}