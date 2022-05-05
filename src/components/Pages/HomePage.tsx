import {useContext, useEffect, useState} from "react";
import {UserContext, WorkspaceContext} from "../../context";
import {useWorkspace} from "../../hooks/workspace";
import {BoardsField} from "../UI/BoardsField/BoardsField";
import {ButtonBar} from "../UI/ButtonBar/ButtonBar";
import {useNavigateUnauthorized} from "../../hooks/navigate";
import {SearchBar} from "../UI/SearchBar/SearchBar";
import "../../css/home-page.css"
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";


export const HomePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [loaded, setLoaded] = useState(false)
    const [workspace, setWorkspace] = useWorkspace(userInfo.id, setLoaded)

    let homeContent = <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
        <div className={"flexContainer"}>
            <h1 className={"greeting"}>Welcome, {userInfo.username}</h1>
            <SearchBar/>
        </div>
        <ButtonBar/>
        <BoardsField/>
    </WorkspaceContext.Provider>

    return (
        <div>
            {useNavigateUnauthorized(userInfo)}
            {(loaded) ?
            homeContent
            :
            <LoadingSpinner/>}
        </div>
    )
}