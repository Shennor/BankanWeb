import React, {FC, useContext, useState} from "react";
import {IList} from "../../../data/DTO";
import "./list_buttons.css"
import {CardButton} from "../CardButton/CardButton";
import {CreateCardButton} from "../CardButton/CreateCardButton";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {EditIcon} from "../../../images/images";
import {editList} from "../../../controllers/ListController";
import {refreshBoard} from "../../../hooks/board";
import {BoardContext} from "../../../context";
import {CardInputButton} from "../CardButton/CardInputButton";

interface IListProps {
    key: number
    list: IList
}

export const List = (props: IListProps) => {
    const [isBeingEdited, setEdition] = useState(false)
    const [loaded, setLoaded] = useState(true)
    const [nameInput, setNameInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [board, setBoard] = useContext(BoardContext)!

    const editListInfo = () => {
        editList(props.list.info.id, nameInput, descriptionInput)
            .then(res => {
                if (res === true) {
                    console.log("List info changed successfully")
                    setLoaded(false)
                    refreshBoard(board.info.id, setBoard, setLoaded)
                        .catch(error => console.error(error))
                } else {
                    alert("Something went wrong while trying to edit list info")
                }
            })
            .catch(error => console.error(error))
        setEdition(false)
    }

    const [cardCreatingState, setCardCreatingState] = useState(false)

    const cardInput = () => {
        if (cardCreatingState)
            return <CardInputButton setCreationState={setCardCreatingState} listId={props.list.info.id}/>
        return <></>
    }


    return (
        <div className={"listField"}>
            <div className={"infoContent"}>
                {(!isBeingEdited) ? <>
                        {(loaded) ?
                            <h4 className={"listName"}>{props.list.info.name}</h4>
                            :
                            <LoadingSpinner/>
                        }
                    </>
                    :
                    <form onSubmit={() => editListInfo()}>
                        <input type={"text"} value={nameInput} autoFocus={true}
                               onChange={(e) => setNameInput(e.target.value)}
                               className={"nameInput"}/>
                        <input type={"text"} value={descriptionInput}
                               onChange={(e) => setDescriptionInput(e.target.value)}
                               className={"descriptionInput"}/>
                        <div className={"buttonFlex"}>
                            <button type={"submit"}>Ok</button>
                            <button type={"reset"} onClick={() => setEdition(false)}>Cancel</button>
                        </div>
                    </form>
                }
                <button className={"editButton"} onClick={() => {
                    setNameInput(props.list.info.name);
                    setDescriptionInput(props.list.info.description);
                    setEdition(true)
                }}>
                    <img src={EditIcon}/>
                </button>
            </div>
            <div className={"delimiter"}/>
            <div className={"contentField"}>
                {props.list.cards.map((value) => <CardButton key={value.id} card={value}/>)}
                {cardInput()}
                {<CreateCardButton setState={setCardCreatingState}/>}
            </div>
        </div>)
}