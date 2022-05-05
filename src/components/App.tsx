import React, {useContext, useEffect, useState} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import RegistrationPage from "./Pages/RegistrationPage";
import {LoginPage} from "./Pages/LoginPage";
import {HomePage} from "./Pages/HomePage";
import Navbar from "./UI/NavBar/navbar";
import {UserContext} from "../context";
import {BoardPage} from "./Pages/BoardPage";
import {getUserInfo, instanceOfUserInfoResponse, UserInfoResponse} from "../controllers/AuthController";
import LoadingSpinner from "./UI/LoadingSpinner/LoadingSpinner";

// context API instead of redux

export default function App() {
    const [userInfo, setUserInfo] = useContext(UserContext)!
    const [isLoaded, setLoaded] = useState(false)

    const updateUserInfo = () => {
        let info = getUserInfo(localStorage.getItem("userId") as unknown as number)
            .catch((error) => console.log(error))
            .then((info) => {
                if(instanceOfUserInfoResponse(info)){
                    setUserInfo({
                        id: info.id,
                        login: localStorage.getItem("userLogin")!,
                        isLogged: true,
                        username: info.name,
                    })
                }
                setLoaded(true)
            })

    }

    // check if token is valid -> import user
    useEffect(() => {
        if(localStorage.getItem("token") == null) localStorage.setItem("token", "")
        if(localStorage.getItem("userId") == null) localStorage.setItem("userId", "-1")
        if(localStorage.getItem("userLogin") == null) localStorage.setItem("userLogin", "")
        updateUserInfo()
    }, [])

    return (
        <>{(isLoaded) ?
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/signup" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/board/:id" element={<BoardPage/>}/>
                    <Route path="/group" element={<h1>Group page</h1>}/>
                    <Route path="/search/:input" element={<h1>Search page</h1>}/>
                    <Route path="/about" element={<LoadingSpinner/>}/>
                </Routes>
            </BrowserRouter>
            : <LoadingSpinner/>
        }</>
);
}