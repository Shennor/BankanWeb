import react, {useContext, useEffect, useState} from "react"
import {BoardContext} from "../../../context";
import {EditIcon} from "../../../images/images";
import "./board_description.css"
import {editBoard} from "../../../controllers/BoardController";
import {instanceOfIError} from "../../../controllers/errors";
import {refreshBoard} from "../../../hooks/board";
import {useForceUpdate} from "../../../utils";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {getInstance} from "http-proxy-middleware/dist/logger";


export const BoardDescription = () => {
    const [board, setBoard] = useContext(BoardContext)!
    const [isBeingEdited, setEdition] = useState(false)
    const [input, setInput] = useState("")
    const [loaded, setLoaded] = useState(true)

    // const forceUpdate = useForceUpdate();

    const editDescription = () => {
        editBoard(board.info.id, board.info.name, input)
            .then(
                (res) => {
                    if (res === true) {
                        console.log("Board description changed successfully")
                        setLoaded(false)
                        refreshBoard(board.info.id, setBoard, setLoaded)
                            .catch(error => console.error(error))
                    } else {
                        alert("Something went wrong while trying to edit board description")
                    }
                })
            .catch((error) => {
                console.error(error)
            })
        setEdition(false)

    }

    // TODO delete this
    let boardDescriptionText = board.info.description

    return (
        <div className={"descriptionPart"}>
            <h3>Description</h3>
            <div className={"textField"}>
                {(!isBeingEdited) ? <>
                        {(loaded) ?
                            <p className={"textInField"}>
                                {boardDescriptionText}
                            </p>
                            :
                            <LoadingSpinner/>
                        } </>
                    :
                    <input type={"text"} value={input} autoFocus={true}
                           onChange={(e) => setInput(e.target.value)}
                           onBlur={() => editDescription()} className={"descriptionInput"}/>
                }
                <button className={"editButton"} onClick={() => {
                    setInput(board.info.description);
                    setEdition(true)
                }}>
                    <img src={EditIcon}/>
                </button>
            </div>
        </div>
    )
}
