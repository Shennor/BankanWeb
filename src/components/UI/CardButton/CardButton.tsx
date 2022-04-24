import {FC} from "react";
import {ICard} from "../../../data/DTO";
import "./card-buttons.css"


interface ICardProps{
    key: number
    card: ICard
}

export const CardButton: FC<ICardProps> = (props) => {
    return(
        <div className={"cardButton"}>
            <button>{props.card.name}</button>
        </div>
    )
}