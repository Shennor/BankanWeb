import React, {useContext} from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import RegistrationPage from "./RegistrationPage";
import {LoginPage} from "./LoginPage";
import {HomePage} from "./HomePage";
import Navbar from "./UI/Navbar/navbar";
import {UserContext} from "../context";

// context API instead of redux

export default function App() {
    const [userInfo, setUserInfo] = useContext(UserContext)!

    return (
        <BrowserRouter>
            <Navbar     />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/signup" element={<RegistrationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/board/:id"/>
            </Routes>
        </BrowserRouter>
    );
}