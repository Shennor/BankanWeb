import React, {FormEvent, useEffect, useState} from "react";
import "./search-bar.css"
import {Navigate} from "react-router-dom";

export const SearchBar = () => {
    const [input, setInput] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const scrollInput = () => {
        const el = document.getElementById("scrolled-search-input")!;
        el.focus()
        el.scrollLeft = el.scrollWidth
    }

    return (
        <form className={"searchForm"} onSubmit={() => setSubmitted(prev => true)}>
            {submitted && <Navigate to={`/search/${input}`}/>}
            <input id={"scrolled-search-input"} className="searchInput" placeholder={"Type to search..."}
            onChange={e => {setInput(prev => e.target.value)}}
            onClick={scrollInput}/>
        </form>
    )
}