import React, {FC, useEffect, useState} from "react";

import classes from "../../css/login-page.module.css"
import LoginForm from "../Forms/LoginForm";
import {BigLogo} from "../../images/images";
import {Navigate} from "react-router-dom";
// import {useUser} from "../../hooks/user";
import {setUser, store} from "../../redux/store";
import {useNavigateAuthorized} from "../../hooks/navigate";
import {IUserInfo} from "../../data/DTO";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {
    const [userInfo, setUserInfo] = useState(store.getState())
    const unsubscribe = store.subscribe(() => {
        setUserInfo(store.getState())
    })

    // const [userInfo, setUserInfo] = useUser()
    //
    // useEffect(() => {
    //     setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    // }, []);

    return(
        <div className={classes.loginContent}>
            {useNavigateAuthorized(userInfo)}
            <div className={classes.loginContainer}>
                <div className={classes.mainLogo}>
                    <img className="logo" src={BigLogo} alt="Logo"/>
                </div>
                <LoginForm/>
            </div>
        </div>
    )
}