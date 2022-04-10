import React, {FC, MouseEventHandler, useContext, useState} from "react";
import Button from "./UI/Button/button";
import {login} from "../controllers/AuthController";
import {UserContext} from "../context";

import classes from "../css/form.module.css"
import CustomButton from "./UI/Button/button";

export interface ILoginInput {
    email: string,
    password: string,
}

const LoginForm: FC = () => {
    const [input, setInput] = useState<ILoginInput>({
        email: "",
        password: ""
    })

    const [userInfo, setUserInfo] = useContext(UserContext)!

    const signIn: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        login(input.email, input.password)
            .catch(() => alert("Server error while trying to sign in."))
            .then(loginResponse => {
                setUserInfo({
                    username: loginResponse!.username,
                    login: loginResponse!.login,
                    id: loginResponse!.id,
                    isLogged: true,
                    token: loginResponse!.accessToken
                })
            })
    }

    return (
        <form className={classes.authForm}>
            <ul>
                <li className={classes.inputContainer}>
                    <h5>Login:</h5>
                    <input type="text" placeholder="Email" required={true} maxLength={40}
                           onChange={(e) => {
                               input.email = e.target.value
                           }}/>
                </li>
                <li className={classes.inputContainer}>
                    <h5>Password:</h5>
                    <input type="text" placeholder="Password" required={true} maxLength={50}
                           onChange={(e) => {
                               input.password = e.target.value
                           }}/>
                </li>
            </ul>
            <CustomButton className="cian-btn" onClick={signIn}>Sign in</CustomButton>
        </form>
    )
}

export default LoginForm