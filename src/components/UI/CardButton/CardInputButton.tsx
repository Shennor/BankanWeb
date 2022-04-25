import React, {FC, FormEvent, useContext, useEffect, useState} from "react";
import {WorkspaceContext} from "../../../context";
import "./card-buttons.css"
import {store} from "../../../redux/store";

interface ICardInputButtonProps {
    setCreationState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardInputButton: FC<ICardInputButtonProps> = (props: ICardInputButtonProps) => {
    const [input, setInput] = useState({boardName: ""})

    const [userInfo, setUserInfo] = useState(store.getState())
    const unsubscribe = store.subscribe(() => {
        setUserInfo(store.getState())
    })

    const [workspace, setWorkspace] = useContext(WorkspaceContext)!

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    }, []);

    function cardCreation(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("createCard called")
        props.setCreationState((perv) => false)
    }

    return (
        <div className={"cardButton"}>
            <button>
                <form className={"cardInput"} onSubmit={cardCreation}
                      onBlur={() => {props.setCreationState((prev: boolean) => false)}}>
                    <input type="text" id={"auto-focused-input"} placeholder="New board name" required={true} maxLength={40}
                           onChange={(e) => {
                               input.boardName = e.target.value
                           }} autoFocus={true}/>
                </form>
            </button>
        </div>
    )
}