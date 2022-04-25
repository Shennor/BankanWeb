import React, {FC, MouseEventHandler, useContext, useState} from "react";
import {login} from "../../controllers/AuthController";

import classes from "../../css/form.module.css"
import { CianButton } from "../UI/Button/button";
import Cookies from "js-cookie";
import {useNavigateAuthorized} from "../../hooks/navigate";
import {useForceUpdate} from "../../constants_utils";

export interface ILoginInput {
    email: string,
    password: string,
}

interface LoginFormProps{
    setAuthorized: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
    const [input, setInput] = useState<ILoginInput>({
        email: "",
        password: ""
    })

    const signIn: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        login(input.email, input.password)
            .catch(() => alert("Server error while trying to sign in."))
            .then(loginResponse => {
                localStorage.setItem("userInfo", JSON.stringify({
                    username: loginResponse!.username,
                    login: loginResponse!.login,
                    id: loginResponse!.id,
                    isLogged: true
                }))
                Cookies.set("token", loginResponse!.accessToken)
                // localStorage.setItem("token", loginResponse!.accessToken)
                props.setAuthorized(prev => true)
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
            <CianButton className="cian-btn" onClick={signIn}>Sign in</CianButton>
        </form>
    )
}

export default LoginForm