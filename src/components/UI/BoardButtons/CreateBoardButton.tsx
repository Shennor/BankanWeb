import React, {FC} from "react";
import {Link} from "react-router-dom";

interface ICreateBoardButtonProps {
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}


export const CreateBoardButton: FC<ICreateBoardButtonProps> = (props) => {
    return (
        <div className={"createBoardButton"}>
            <button onClick={() => {props.onClick(prev => (true))}}>
                +
            </button>
        </div>
    )
}