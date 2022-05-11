import {FC, useContext, useState} from "react";
import {ICard} from "../../../data/DTO";
import "./card-buttons.css"
import {Menu, MenuButton, MenuItem, SubMenu} from "@szhsin/react-menu";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import {EditIcon} from "../../../images/images";
import {deleteCard, editCard} from "../../../controllers/CardController";
import {refreshBoard} from "../../../hooks/board";
import {BoardContext} from "../../../context";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

interface ICardProps {
    key: number
    card: ICard
}

export const CardButton: FC<ICardProps> = (props) => {
    const [loaded, setLoaded] = useState(true)
    const [board, setBoard] = useContext(BoardContext)!
    const [underEdition, setEditing] = useState(false)
    const [input, setInput] = useState(props.card.name)

    const deleteCurrentCard = () => {
        deleteCard(props.card.id)
            .then(res => {
                if (res === true) {
                    setLoaded(false)
                    refreshBoard(board.info.id, setBoard, setLoaded)
                        .catch(error => console.error(error))
                    return
                }
                alert("Something went wrong while trying to delete card")
            })
            .catch(error => console.error(error))
    }

    const editCurrentCard = () => {
        editCard(props.card.id, input)
            .then(res => {
                if(res === true){
                    setLoaded(false)
                    refreshBoard(board.info.id, setBoard, setLoaded)
                        .catch(error => console.error(error))
                } else {
                    alert("Something went wrong while trying to edit card info")
                }
            })
            .catch(error => console.error(error))
        setEditing(false)
    }

    return (
        (!underEdition) ?
            (loaded) ?
                <div className={"cardButton"}>
                    <button className={"cardButtonField"}>{props.card.name}</button>
                    <div className={"editMenu"}>
                        <Menu menuButton={<MenuButton><img src={EditIcon}/></MenuButton>}>
                            <MenuItem onClick={() => setEditing(true)}>Edit</MenuItem>
                            <MenuItem onClick={() => deleteCurrentCard()}>Delete</MenuItem>
                            {/*<SubMenu label="Move">*/}
                            {/*    <MenuItem>Up</MenuItem>*/}
                            {/*    <MenuItem>Down</MenuItem>*/}
                            {/*</SubMenu>*/}
                        </Menu>
                    </div>
                </div>
                :
                <LoadingSpinner/>
            :
            <div className={"cardButton"}>
                <div className={"cardButtonField"}>
                    <input type={"text"} value={input} autoFocus={true}
                           onChange={(e) => setInput(e.target.value)}
                           onBlur={() => editCurrentCard()} className={"descriptionInput"}/>

                </div>
            </div>
    )
}