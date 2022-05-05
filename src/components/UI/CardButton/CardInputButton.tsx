import React, {FC, FormEvent, useContext, useState} from "react";
import {BoardContext, UserContext, WorkspaceContext} from "../../../context";
import "./card-buttons.css"
import {createCard} from "../../../controllers/CardController";
import {refreshBoard} from "../../../hooks/board";

interface ICardInputButtonProps {
    listId: number,
    setCreationState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardInputButton: FC<ICardInputButtonProps> = (props: ICardInputButtonProps) => {
    const [input, setInput] = useState({cardName: ""})
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const [board, setBoard] = useContext(BoardContext)!


    function cardCreation(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("createCard called")
        createCard(props.listId, input.cardName)
            .then(res => {
                if(res === true)
                    console.log("Card created successfully")
                else
                    alert("Something went wrong while trying to create a card")
            })
            .catch(e => console.error(e))
            .then(() => refreshBoard(board.info.id, setBoard))
        props.setCreationState((perv) => false)
    }

    return (
        <div className={"cardButton"}>
            <button className={"cardInputButton"}>
                <form className={"cardInput"} onSubmit={cardCreation}
                      onBlur={() => {props.setCreationState((prev: boolean) => false)}}>
                    <input className={"cardButtonInput"} type="text" id={"auto-focused-input"} placeholder="New card name" required={true} maxLength={40}
                           onChange={(e) => {
                               input.cardName = e.target.value
                           }} autoFocus={true}/>
                </form>
            </button>
        </div>
    )
}