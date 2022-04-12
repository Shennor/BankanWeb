import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import {UserContext, WorkspaceContext} from './context';
import {IUserInfo} from "./data/DTO";


function Main() {
    const [userInfo, setUserInfo] = useState<IUserInfo>({
        username: "",
        login: "",
        id: -1,
        isLogged: false,
        token: ""
    })


    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            <App/>
        </UserContext.Provider>
)
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
