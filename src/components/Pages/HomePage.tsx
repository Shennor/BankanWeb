import {useContext, useEffect, useState} from "react";
import {UserContext, WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/workspace";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {SearchBar} from "../UI/SearchBar/SearchBar";
import "../../css/home-page.css"


export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useWorkspace()

    return(
        <div>
            {useNavigateUnauthorized(userInfo)}
            <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
                <div className={"flexContainer"}>
                    <h1 className={"greeting"}>Welcome, {userInfo.username}</h1>
                    <SearchBar/>
                </div>
                <ButtonBar />
                <BoardsField onCreate={() => {}}/>
            </WorkspaceContext.Provider>
        </div>
    )
}