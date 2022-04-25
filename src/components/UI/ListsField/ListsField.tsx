import React, {FC, useState} from "react";
import {List} from "../List/List";
import {CreateListButton} from "../List/CreateListButton";
import {IBoard} from "../../../data/DTO";
import {ListInputButton} from "../List/ListInputButton";

import "./list_field.css"

interface IListsFieldProps {
    board: IBoard
    setBoard: React.Dispatch<React.SetStateAction<IBoard>>
}

export const ListsField: FC<IListsFieldProps> = (props: IListsFieldProps) => {
    const [listCreatingState, setListCreatingState] = useState(false)

    const listInput = () => {
        if (listCreatingState)
            return <ListInputButton setCreationState={setListCreatingState} board={props.board} setBoard={props.setBoard}/>
        return <></>
    }

    return (
        <div className={"listsField"}>
            {props.board.lists.map((value) => <List key={value.info.id} list={value}/>)}
        {listInput()}
        <CreateListButton setState={setListCreatingState}/>
    </div>
)
}