import React, {FC, MouseEventHandler, useContext, useState} from "react";
import Button from "./UI/Button/button";
import {login} from "../controllers/AuthController";
import {UserContext} from "../context";

export interface ISignUpInput {
    email: string,
    password: string,
}

const SignInForm: FC = () => {
    const [input, setInput] = useState<ISignUpInput>({
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

    return(
        <form>
            <input type="text" placeholder="Email" required={true} maxLength={40}
            onChange={(e) => {input.email = e.target.value}}/>
            <input type="text" placeholder="Password" required={true} maxLength={50}
            onChange={(e) => {input.password = e.target.value}}/>
            <Button onClick={signIn}>Sign in</Button>
        </form>
    )
}

export default SignInForm