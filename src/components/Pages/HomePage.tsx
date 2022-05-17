import {useContext, useEffect, useState} from "react";
import {UserContext, WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/workspace";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {SearchBar} from "../UI/SearchBar/SearchBar";
import "../../css/home-page.css"
import {Navigate} from "react-router-dom";

import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";


export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!

    let homeContent = <>
        <div className={"flexContainer"}>
            <h1 className={"greeting"}>Welcome, {userInfo.username}</h1>
            {/*<SearchBar/>*/}
        </div>
        <ButtonBar/>
        <BoardsField/>
    </>

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            {console.error("1")}
            {homeContent}
        </div>
    )
}