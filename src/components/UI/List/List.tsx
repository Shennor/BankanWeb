import {FC} from "react";
import {IList} from "../../../data/DTO";
import "./list_buttons.css"
import {CardButton} from "../CardButton/CardButton";
import {CreateCardButton} from "../CardButton/CreateCardButton";

interface IListProps {
    key: number
    list: IList
}

export const List: FC<IListProps> = (props) => {

    return(
        <div className={"listField"}>
            <h4 className={"listName"}>{props.list.info.name}</h4>
            <div className={"delimiter"}/>
            <div className={"contentField"}>
                {props.list.cards.map((value) => <CardButton key={value.id} card={value}/>)}
                {/*<CreateCardButton setState={}/>*/}
            </div>
        </div>)
}