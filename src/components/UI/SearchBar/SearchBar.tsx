import React, {FormEvent, useEffect, useState} from "react";
import "./search-bar.css"
import {Navigate} from "react-router-dom";

export const SearchBar = (setInput: React.Dispatch<React.SetStateAction<string>>,
                          setSearch: React.Dispatch<React.SetStateAction<boolean>>) => {

    const scrollInput = () => {
        const el = document.getElementById("scrolled-search-input")!;
        el.focus()
        el.scrollLeft = el.scrollWidth
    }

    return (
        <>
            <form className={"searchForm"} onSubmit={(e) => {e.preventDefault(); setSearch(prev => true)}}>
                <input id={"scrolled-search-input"} className="searchInput" placeholder={"Type to search..."}
                       onChange={e => {
                           setInput(prev => e.target.value)
                       }}
                       onClick={scrollInput}/>
            </form>
        </>
    )
}