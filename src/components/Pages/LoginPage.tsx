import React, {FC, useContext} from "react";

import classes from "../../css/login-page.module.css"
import LoginForm from "../Forms/LoginForm";
import {BigLogo} from "../../images/images";
import {Navigate} from "react-router-dom";
import {UserContext} from "../../context";
import {IUserInfo} from "../../data/DTO";
import {useNavigateAuthorized} from "../../hooks/navigate";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)!

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