import React, {FC, useContext, useState} from "react";

import classes from "../../css/login-page.module.css"
import LoginForm from "../Forms/LoginForm";
import {BigLogo} from "../../images/images";
import {Navigate} from "react-router-dom";
import {IUserInfo} from "../../data/DTO";
import {useNavigateAuthorized} from "../../hooks/navigate";
import {set} from "js-cookie";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {
    const [authorized, setAuthorized] = useState(false)

    return(
        <div className={classes.loginContent}>
            {(authorized) ? <Navigate to="/home"/> : <></>}
            <div className={classes.loginContainer}>
                <div className={classes.mainLogo}>
                    <img className="logo" src={BigLogo} alt="Logo"/>
                </div>
                <LoginForm setAuthorized={setAuthorized}/>
            </div>
        </div>
    )
}