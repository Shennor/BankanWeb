import {SearchBar} from "../UI/SearchBar/SearchBar";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {refreshMedia, useMedia} from "../../hooks/useMedia";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import {IBoardInfo, ICardInBoard, IListInBoard, IMedia} from "../../data/DTO";
import {Navigate} from "react-router-dom";
import {WorkspaceContext} from "../../context";
import {SearchResult} from "../UI/SearchResults/SearchResult";
import "../../css/search-page.css"


export const SearchPage = () => {
    const [workspace, setWorkspace] = useContext(WorkspaceContext)!
    const [mediaLoaded, setMediaLoaded] = useState(false)
    const [media, setMedia] = useMedia(workspace.id, setMediaLoaded)
    const [searchSubmitted, setSearch] = useState(false)
    const [input, setInput] = useState(localStorage.getItem("searchInput")!)

    const [boardResults, setBoardRes] = useState([] as IBoardInfo[]);
    const [listResults, setListRes] = useState([] as IListInBoard[]);
    const [cardResults, setCardRes] = useState([] as ICardInBoard[]);

    useEffect(() => {
        setSearch(true)
        }, [mediaLoaded])

    useEffect(() => {
        if (searchSubmitted) {
            setBoardRes(media.boards.filter((value: IBoardInfo) => {
                return (value.name.search(input) != -1)
                    || (value.description.search(input) != -1)
                    || (value.id.toString().search(input) != -1)
            }))
            setListRes(media.lists.filter((value: IListInBoard) => {
                return (value.listEntity.name.search(input) != -1)
                    || (value.listEntity.description.search(input) != -1)
                    || (value.listEntity.id.toString().search(input) != -1)
            }))
            setCardRes(media.cards.filter((value: ICardInBoard) => {
                return (value.cardEntity.name.search(input) != -1)
                    || (value.cardEntity.id.toString().search(input) != -1)
                    || (value.cardEntity.cardContent != undefined && value.cardEntity.cardContent.search(input) != -1)
            }))

        }

        localStorage.setItem("searchInput", input)
        setSearch(false)
    }, [searchSubmitted])

    return (
        <div className={"searchPage"}>
            {
                (!mediaLoaded) ? <LoadingSpinner/>
                    :
                    <>
                        {SearchBar(setInput, setSearch)}
                        <h1>{(input == "") ? "All media:" : `Results for searching "${input}":`}</h1>
                        <div className={"searchResults"}>
                            <h2><b>Boards</b></h2>
                            <div className={"boardsResults"}>
                                {
                                    (boardResults.length != 0) ?
                                        boardResults.map((value) => <SearchResult
                                            name={value.name}
                                            description={value.description}
                                            linkUrl={`/board/${value.id}`}/>)
                                        :
                                        <h3>No board matching</h3>
                                }
                            </div>
                            <h2><b>Lists</b></h2>
                            <div className={"listsResults"}>
                                {
                                    (listResults.length == 0) ? <h3>No list matching</h3>
                                        :
                                        listResults.map((value) => <SearchResult
                                            name={value.listEntity.name}
                                            description={value.listEntity.description}
                                            linkUrl={`/board/${value.boardId}`}/>)
                                }
                            </div>
                            <h2><b>Cards</b></h2>
                            <div className={"cardsResults"}>
                                {
                                    (cardResults.length == 0) ? <h3>No card matching</h3>
                                        :
                                        cardResults.map((value) => <SearchResult
                                            name={value.cardEntity.name}
                                            linkUrl={`/board/${value.boardId}`}/>)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}