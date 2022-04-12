import {useContext, useEffect, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {UserContext, WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/boards";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {Nav} from "react-bootstrap";
import {UserInfo} from "os";
import {IUserInfo} from "../../data/DTO";
import {useNavigateUnauthorized} from "../../hooks/navigate";

export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useWorkspace()

    return(
        <div>
            {useNavigateUnauthorized(userInfo)}
            <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
                <div>
                    <h1>Welcome, {userInfo.username}</h1>
                    SearchBar
                </div>
                <ButtonBar />
                <BoardsField onCreate={() => {}}/>
                <button>Send getList (for the first board) and getCard (for fist card in  first list) requests</button>
            </WorkspaceContext.Provider>
        </div>
    )
}