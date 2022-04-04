import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";

import './index.css';
import {HomePage} from "./components/HomePage";
import {LoginPage} from "./components/LoginPage";
import { UserContext } from './context';



function Main() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        login: "",
        isLogged: false,
        token: ""
    })

    return (
        <BrowserRouter>
            <Routes>
                <UserContext.Provider value={[userInfo, setUserInfo]}>
                    <Route path="/" element={<App/>}/>
                    <Route path="signup" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/board/:id"/>
                </UserContext.Provider>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(
    Main(),
    document.getElementById('root')
)

reportWebVitals();
