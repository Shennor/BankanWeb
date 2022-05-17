import React, {FormEvent, useEffect, useState} from "react";
import "./search-bar.css"
import {Navigate} from "react-router-dom";

export const SearchBar = () => {
    const [searchSubmitted, setSearch] = useState(false)
    const [input, setInput] = useState("")
    let navigated = false

    const scrollInput = () => {
        const el = document.getElementById("scrolled-search-input")!;
        el.focus()
        el.scrollLeft = el.scrollWidth
    }

    useEffect(() => {
        if(searchSubmitted){
            setSearch(false)
            navigated = true
        }
    }, [searchSubmitted])

    return (
        <>
            {(navigated) ? <>
                <Navigate to={`/search/${input}`}/>
            </> : <></>}
            <form className={"searchForm"} onSubmit={() => setSearch(prev => true)}>
                <input id={"scrolled-search-input"} className="searchInput" placeholder={"Type to search..."}
                       onChange={e => {
                           setInput(prev => e.target.value)
                       }}
                       onClick={scrollInput}/>
            </form>
        </>
    )
}