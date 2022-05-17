import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import {UserContext, WorkspaceContext} from './context';
import {IUserInfo} from "./data/DTO";
import {getUserInfo, instanceOfUserInfoResponse} from "./controllers/AuthController";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";


function Main() {
    const [userInfo, setUserInfo] = useState<IUserInfo>({
        username: "",
        login: "",
        id: -1,
        isLogged: false,
    })
    const [isLoaded, setLoaded] = useState(false)

    const updateUserInfo = () => {
        let info = getUserInfo(localStorage.getItem("userId") as unknown as number)
            .catch((error) => console.log(error))
            .then((info) => {
                if (instanceOfUserInfoResponse(info)) {
                    setUserInfo({
                        id: info.id,
                        login: localStorage.getItem("userLogin")!,
                        isLogged: true,
                        username: info.name,
                    })
                }
                // else {
                //     setUserInfo({
                //         username: "",
                //         login: "",
                //         id: -1,
                //         isLogged: false,
                //     })
                // }
                setLoaded(true)
            })

    }

    // check if token is valid -> import user
    useEffect(() => {
        if (localStorage.getItem("token") == null) localStorage.setItem("token", "")
        if (localStorage.getItem("userId") == null) localStorage.setItem("userId", "-1")
        if (localStorage.getItem("userLogin") == null) localStorage.setItem("userLogin", "")
        if (localStorage.getItem("searchInput") == null) localStorage.setItem("searchInput", "")
        updateUserInfo()
    }, [])

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>
            {(isLoaded) ?
                <App/>
                :
                <LoadingSpinner/>
            }
        </UserContext.Provider>
    )
}

ReactDOM.render(
    <Main/>,
    document.getElementById('root')
)

reportWebVitals();
