import {SearchBar} from "../UI/SearchBar/SearchBar";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {refreshMedia, useMedia} from "../../hooks/useMedia";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import {IBoardInfo, ICardInBoard, IListInBoard, IMedia} from "../../data/DTO";
import {Navigate} from "react-router-dom";
import {WorkspaceContext} from "../../context";


export const SearchPage = () => {
    const input = useParams().input as string
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const [mediaLoaded, setMediaLoaded] = useState(false)
    const [media, setMedia] = useMedia(workspace.id, setMediaLoaded)
    const [loaded, setLoaded] = useState(false)

    // useEffect(() => {
    //     refreshMedia(workspace.id, setMedia, setLoaded)
    // }, [])

    return (
        <div className={"searchPage"}>
            <SearchBar/>
            <div className={"searchResults"}>
                {(!loaded) ? <LoadingSpinner/>
                    :
                    <>
                        <h1>Results</h1>
                        <div className={"boardsResults"}>
                            <h2>Boards</h2>
                            {JSON.stringify(media.boards.filter((value: IBoardInfo) => {
                                return (value.name.search(input) != -1)
                                    || (value.description.search(input) != -1)
                                    || (value.id.toString().search(input) != -1)
                            }))}
                        </div>
                        <div className={"listsResults"}>
                            <h2>Lists</h2>
                            {JSON.stringify(media.lists.filter((value: IListInBoard) => {
                                return (value.listEntity.name.search(input) != -1)
                                    || (value.listEntity.description.search(input) != -1)
                                    || (value.listEntity.id.toString().search(input) != -1)
                            }))}
                        </div>
                        <div className={"cardsResults"}>
                            <h2>Cards</h2>
                            {JSON.stringify(media.cards.filter((value: ICardInBoard) => {
                                return (value.cardEntity.name.search(input) != -1)
                                    || (value.cardEntity.id.toString().search(input) != -1)
                                    || (value.cardEntity.cardContent != undefined && value.cardEntity.cardContent.search(input) != -1)

                            }))}
                        </div>
                    </>
                }
            </div>
        </div>
    )
}