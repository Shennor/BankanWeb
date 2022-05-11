import {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {IBoardInfo} from "../../../data/DTO";

import "./board-buttons.css"
import Select from "react-select/base";

interface IBoardButtonProps {
    boardInfo: IBoardInfo
}

const options = [
    {value: "delete", label: "Delete"},
]

function generateContextMenuItems(isRight = false, isLeft = false) {
    return [
        {
            label: 'Edit',
        },
        {
            label: 'Move',
            subMenuItems: [
                {
                    label: isRight ? '|' : '>'
                },
                {
                    label: isLeft ? '|' : '<',
                },
            ],
        },
        {
            label: 'Delete',
        },
    ];
}

const clickPosition = {x: null, y: null};


export const BoardButton: FC<IBoardButtonProps> = (props) => {
    const [clicked, setClicked] = useState(false)
    const [menuVisibility, setMenuVisibility] = useState(false)
    const [menuInput, setMenuInput] = useState("")

    const [contextMenuItems, setContextMenuItems] = useState(
        generateContextMenuItems()
    );
    const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
    const contextMenuRef = useRef(null);

    // function updateContextMenuVerticalPosition() {
    //     const menuHeight = contextMenuRef.current.offsetHeight;
    //     const shouldMoveUp = menuHeight > window.innerHeight - clickPosition.y;
    //
    //     contextMenuRef.current.style.top = shouldMoveUp
    //         ? `${clickPosition.y - menuHeight}px`
    //         : `${clickPosition.y}px`;
    // }
    //
    // function updateContextMenuHorizontalPosition() {
    //     const menuWidth = contextMenuRef.current.offsetWidth;
    //     const shouldMoveLeft = menuWidth > window.innerWidth - clickPosition.x;
    //
    //     contextMenuRef.current.style.left = shouldMoveLeft
    //         ? `${clickPosition.x - menuWidth}px`
    //         : `${clickPosition.x}px`;
    // }
    //
    // function updateContextMenuPosition() {
    //     updateContextMenuVerticalPosition();
    //     updateContextMenuHorizontalPosition();
    // }

    function openContextMenu(event: any) {
        event.preventDefault();

        clickPosition.x = event.clientX;
        clickPosition.y = event.clientY;

        setIsContextMenuOpen(true);
    }

    function closeContextMenu() {
        setIsContextMenuOpen(false);
    }

    useEffect(() => {
        if (!isContextMenuOpen) return;

        function handleClickAway() {
            if (!contextMenuRef.current.contains(event.target)) {
                closeContextMenu();
            }
        }

        function handleEsc(event: any) {
            if (event.keyCode === 27) {
                closeContextMenu();
            }
        }

        document.addEventListener('mousedown', handleClickAway);
        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
            document.removeEventListener('keydown', handleEsc);
        };
    });



    return (
        <div className={"boardButton"}>
            {clicked && <Navigate to={`/board/${props.boardInfo.id}`}/>}
            <button onClick={() => setClicked(prev => true)} onAuxClick={() => setMenuVisibility(true)}>
                {props.boardInfo.name}
            </button>
            {/*{(menuVisibility)*/}
            {/*    ?*/}
            {/*    <div className={"boardMenu"} onBlur={() => setMenuVisibility(false)} >*/}
            {/*        <button className={"menuButton"} onClick={() => deleteBoard()}>Delete</button>*/}
            {/*    </div>*/}
            {/*    : <></>*/}
            {/*}*/}
        </div>
    )
}