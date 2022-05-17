import React, {useContext, useState} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import RegistrationPage from "./Pages/RegistrationPage";
import {LoginPage} from "./Pages/LoginPage";
import {HomePage} from "./Pages/HomePage";
import Navbar from "./UI/NavBar/navbar";
import {BoardPage} from "./Pages/BoardPage";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";
import {SearchPage} from "./Pages/SearchPage";
import {useWorkspace} from "../hooks/workspace";
import {UserContext, WorkspaceContext} from "../context";
import {Navigate} from "react-router-dom";



// context API instead of redux

export default function App() {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [isLoaded, setLoaded] = useState(false)
    const [workspace, setWorkspace] = useWorkspace(userInfo.id, setLoaded)

    return (
        <WorkspaceContext.Provider value={[workspace, setWorkspace]}>
        <>{(isLoaded) ?
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to={"/about"}/>}/>
                    <Route path="/signup" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/board/:id" element={<BoardPage/>}/>
                    <Route path="/group" element={<h1>Group page</h1>}/>
                    <Route path="/search/:input" element={<SearchPage/>}/>
                    <Route path="/about" element={<LoadingSpinner/>}/>
                </Routes>
            </BrowserRouter>
            : <LoadingSpinner/>
        }</>
        </WorkspaceContext.Provider>
);
}