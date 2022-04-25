import React, {FC, useContext, useEffect, useState} from "react";

import classes from "../../css/login-page.module.css"
import LoginForm from "../Forms/LoginForm";
import {BigLogo} from "../../images/images";
import {Navigate} from "react-router-dom";
import {useUser} from "../../hooks/user";
import {useNavigateAuthorized} from "../../hooks/navigate";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {
    const [userInfo, setUserInfo] = useUser()
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
        setChanged(false)
    }, [changed]);

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        setChanged(true)
    }, [userInfo.isLogged])

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