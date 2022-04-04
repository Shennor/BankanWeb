import {getBoards} from "../controllers/BoardController";
import {useContext, useState} from "react";
import {UserContext, WorkspaceContext} from "../context";


export const HomePage = () => {
    const [boards, setBoards] = useState(getBoards())
    const [userInfo, setUserInfo] = useContext(UserContext)

    return(
        <WorkspaceContext.Provider value={[boards, setBoards]}>
            <h1>Welcome back, {userInfo.username}</h1>
        </WorkspaceContext.Provider>
    )
}