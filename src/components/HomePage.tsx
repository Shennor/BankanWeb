import {getBoards} from "../controllers/BoardController";
import {useContext, useState} from "react";
import {UserContext, WorkspaceContext} from "../context";
import {IBoard, IWorkspace} from "../data/DTO";


export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [boards, setBoards] = useContext(WorkspaceContext)!

    return(
        <div>
            <h1>Welcome back, {userInfo.username}</h1>
            {console.log(userInfo)}
            {console.log(boards)}
        </div>
    )
}