import {useContext, useEffect, useState} from "react";
import {WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/workspace";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {SearchBar} from "../UI/SearchBar/SearchBar";
import "../../css/home-page.css"


export const HomePage = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!)
    const [workspace, setWorkspace] = useWorkspace()

    return (
        <div>
            {useNavigateUnauthorized()}
            <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
                {(workspace.id != -1) ?
                    <>
                        <div className={"flexContainer"}>
                            <h1 className={"greeting"}>Welcome, {userInfo.username}</h1>
                            <SearchBar/>
                        </div>
                        <ButtonBar/>
                        <BoardsField/>
                    </>
                    :
                    <h1>Loading</h1>
                }
            </WorkspaceContext.Provider>
        </div>
    )
}