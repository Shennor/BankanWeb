import React, {FC} from "react";

import classes from "../css/login-page.module.css"
import LoginForm from "./LoginForm";
import {BigLogo} from "../images/images";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {


    return(
        <div className={classes.loginContent}>
            <div className={classes.loginContainer}>
                <div className={classes.mainLogo}>
                    <img className="logo" src={BigLogo} alt="Logo"/>
                </div>
                <LoginForm/>
            </div>

        </div>
    )
}