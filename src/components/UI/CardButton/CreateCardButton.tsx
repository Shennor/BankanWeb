import React, {FC} from "react";
import "./card-buttons.css"

interface ICreateCardButtonProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateCardButton: FC<ICreateCardButtonProps> = (props) => {
    return (
        <div className={"createCardButton"}>
            <button onClick={() => {props.setState(prev => (true))}}>
                +
            </button>
        </div>
    )
}