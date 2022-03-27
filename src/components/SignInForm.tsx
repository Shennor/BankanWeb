import React, {FC, MouseEventHandler, useState} from "react";
import Button from "./UI/Button/button";
import {login, register} from "../controllers/AuthController";

export interface ISignUpInput {
    email: string,
    password: string,
}

const SignInForm: FC = () => {
    const [input, setInput] = useState<ISignUpInput>({
        email: "",
        password: ""
    })

    const signIn: MouseEventHandler<HTMLButtonElement> = (e) => {
        // check data
        // TODO: exception handling
        login(input.email, input.password)
    }

    return(
        <form>
            <input type="text" placeholder="Email" required={true} maxLength={40}
            onChange={(e) => {input.email = e.target.value}}/>
            <input type="text" placeholder="Password" required={true} maxLength={50}
            onChange={(e) => {input.password = e.target.value}}/>
            <Button onClick={signIn}>Sign me up!</Button>
        </form>
    )
}

export default SignInForm