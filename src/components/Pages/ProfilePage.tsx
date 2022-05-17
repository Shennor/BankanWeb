import {UserContext, WorkspaceContext} from "../../context";
import {useContext, useState} from "react";
import "../../css/profile-page.css"
import {useMedia} from "../../hooks/useMedia";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";

export const ProfilePage = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const [statLoaded, setStatLoaded] = useState(false)
    const [media, setMedia] = useMedia(workspace.id, setStatLoaded)

    return (
        <div className={"profileContainer"}>
            <div className={"profileStatusField"}>
                <div className={"imageField"}>
                    <img/>
                </div>
                <div className={"profileInfoField"}>
                    <h1><b>Name:</b> {userInfo.username}</h1>
                    <h2><b>Login:</b> {userInfo.login}</h2>
                    <h2><b>Personal ID:</b> {userInfo.id}</h2>
                </div>
            </div>
            {(!statLoaded) ? <LoadingSpinner/> :
                <div className={"statistics"}>
                    <p>You have {media.boards.length} boards, {media.lists.length} lists and {media.cards.length} cards</p>
                </div>
            }
            <div className={"settingsField"}>
                <h1><b>Notifications:</b></h1>
                <p>Nothing new...</p>
            </div>
        </div>
    )
}