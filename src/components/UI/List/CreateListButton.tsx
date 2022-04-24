import React from "react";
import "./list_buttons.css"

interface ICreateListButtonProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateListButton = (props: ICreateListButtonProps) => {
    return (
        <div className={"createListButton"}>
            <button onClick={() => {props.setState(prev => (true))}}>
                +
            </button>
        </div>
    )}
