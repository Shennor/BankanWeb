import React, {FC, useContext, useState} from "react";
import {List} from "../List/List";
import {CreateListButton} from "../List/CreateListButton";
import {IBoard} from "../../../data/DTO";
import {ListInputButton} from "../List/ListInputButton";

import "./list_field.css"
import {BoardContext} from "../../../context";

interface IListsFieldProps {

}

export const ListsField: FC<IListsFieldProps> = (props: IListsFieldProps) => {
    const [listCreatingState, setListCreatingState] = useState(false)
    const [board, setBoard] = useContext(BoardContext)!

    const listInput = () => {
        if (listCreatingState)
            return <ListInputButton setCreationState={setListCreatingState}/>
        return <></>
    }

    return (
        <div className={"listsField"}>
            {board.lists.map((value) => <List key={value.info.id} list={value}/>)}
        {listInput()}
        <CreateListButton setState={setListCreatingState}/>
    </div>
)
}