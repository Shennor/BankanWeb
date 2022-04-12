import {getBoards} from "../../controllers/BoardController";
import {useContext, useEffect, useState} from "react";
import {UserContext, WorkspaceContext} from "../../context";
import {IBoard, IWorkspace} from "../../data/DTO";
import {useWorkspace} from "../../hooks/boards";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";


export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useWorkspace()

    // Temporary

    const SendRequests = () => {

    }

    return(
        <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
            <div className={"1"}>
                <h1>Welcome, {userInfo.username}</h1>
                SearchBar
            </div>
            <ButtonBar />
            <BoardsField/>
            <button onClick={SendRequests}>Send getList (for the first board) and getCard (for fist card in  first list) requests</button>
        </WorkspaceContext.Provider>
    )
}