import {useContext, useEffect, useState} from "react";
import {WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/workspace";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {SearchBar} from "../UI/SearchBar/SearchBar";
import "../../css/home-page.css"
import {store} from "../../redux/store";
import {useSelector} from "react-redux";
import {IUserInfo} from "../../data/DTO";


export const HomePage = () => {
    const [workspace, setWorkspace] = useWorkspace()

    const userInfo = useSelector((state) => state as IUserInfo)

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            {console.log(userInfo)}
            {console.log(store)}
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