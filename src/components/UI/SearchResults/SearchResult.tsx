import {CianButton} from "../Button/button";
import {Link} from "react-router-dom";
import "./search_result.css"
import {FC} from "react";

interface ISearchResultProps{
    name: string, description?: string, linkUrl: string
}

export const SearchResult : FC<ISearchResultProps> = (props) => {

    return (
        <div className={"searchResult"}>
            <div className={"resultName"}>
                <b>Name:</b> {props.name}
            </div>
            {(props.description !== undefined) ?
            <div className={"resultDescription"}>
                <b>Description:</b> {props.description}
            </div>
                : <></>}
            <Link to={props.linkUrl}>
                <CianButton>
                    Go to
                </CianButton>
            </Link>
        </div>
    )
}