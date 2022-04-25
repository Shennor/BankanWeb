import React, {FC, MouseEventHandler, useContext, useEffect, useState} from "react";
import {login} from "../../controllers/AuthController";

import classes from "../../css/form.module.css"
import {CianButton} from "../UI/Button/button";
import Cookies from "js-cookie";
import {SET_USER, store} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {IUserInfo} from "../../data/DTO";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

export interface ILoginInput {
    email: string,
    password: string,
}

const LoginForm: FC = () => {
    const [input, setInput] = useState<ILoginInput>({
        email: "",
        password: ""
    })

    const userInfo = useAppSelector((state) => state as IUserInfo)
    const dispatch = useAppDispatch()

    // const [userInfo, setUserInfo] = useUser()
    //
    // useEffect(() => {
    //     setUserInfo(JSON.parse(localStorage.getItem("userInfo")!));
    // }, []);

    const signIn: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log(userInfo)
        login(input.email, input.password)
            .catch(() => alert("Server error while trying to sign in."))
            .then(loginResponse => {
                console.log(loginResponse)
                dispatch({
                    type: SET_USER, new_user: {
                        username: loginResponse!.username,
                        login: loginResponse!.login,
                        id: loginResponse!.id,
                        isLogged: true,
                        token: loginResponse!.accessToken
                    }
                })
                console.log(userInfo)
                // Cookies.set("token", loginResponse!.accessToken)
                // localStorage.setItem("token", loginResponse!.accessToken)
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