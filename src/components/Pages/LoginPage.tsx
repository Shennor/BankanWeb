import React, {FC, useContext, useEffect} from "react";

import classes from "../../css/login-page.module.css"
import LoginForm from "../Forms/LoginForm";
import {BigLogo} from "../../images/images";
import {Navigate} from "react-router-dom";
import {useUser} from "../../hooks/user";


// {setUserInfo({
//     isLogged: false,
//     id: -1,
//     username: "",
//     token: "",
//     login: ""
// })}

export const LoginPage : FC = () => {
    const [userInfo, setUserInfo] = useUser()

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    }, []);

    return(
        <div className={classes.loginContent}>
            {(userInfo.isLogged) ? <Navigate to={"/home"}/> : <></>}
            <div className={classes.loginContainer}>
                <div className={classes.mainLogo}>
                    <img className="logo" src={BigLogo} alt="Logo"/>
                </div>
                <LoginForm/>
            </div>
        </div>
    )
}