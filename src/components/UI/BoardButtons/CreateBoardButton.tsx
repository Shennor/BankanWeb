import React, {FC} from "react";
import {Link} from "react-router-dom";

interface ICreateBoardButtonProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}


export const CreateBoardButton: FC<ICreateBoardButtonProps> = (props) => {
    return (
        <div className={"createBoardButton"}>
            <button onClick={() => {props.setState(prev => (true))}}>
                +
            </button>
        </div>
    )
}