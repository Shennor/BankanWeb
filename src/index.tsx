import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";

import './index.css';
import {HomePage} from "./components/HomePage";
import {LoginPage} from "./components/LoginPage";
import {UserContext, WorkspaceContext} from './context';
import {getBoards} from "./controllers/BoardController";
import {IWorkspace} from "./data/DTO";


function Main() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        login: "",
        id: -1,
        isLogged: false,
        token: ""
    })

    const [boards, setBoards] = useState<IWorkspace>({
        id: -1,
        name: "",
        listOfBoardEntities: []
    })

    const refreshBoards = (id : number, token: string) => {
        getBoards(id, token)
            .then((workspace) => {
                setBoards(workspace!)
            })
            .catch((error) => alert("Can not load boards from server"))
    }

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="signup" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/home">
                        {refreshBoards(userInfo.id, userInfo.token)}
                        <WorkspaceContext.Provider value={[boards, setBoards]}>
                            <HomePage/>
                        </WorkspaceContext.Provider>
                    </Route>
                    <Route path="/board/:id"/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
)
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
