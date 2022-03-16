import React, {FC, MouseEventHandler, Ref, useRef, useState} from "react";
import Input from "./UI/Input/input";
import Button from "./UI/Button/button";
import {SignUpInput} from "./RegistrationPage";

const SignUpForm: FC<[SignUpInput, ((s: SignUpInput) => SignUpInput)]>
    = ([input, setInput] : [SignUpInput, ((s: SignUpInput) => SignUpInput)]) => {

    const [message, setMessage] = useState<string>("")

    const signUp: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
    }

    return(
        <form>
            <div>{message}</div>
            <Input onChange={(e) => setInput({username : e.target.value})}
                   type={"text"} placeholder={"Username"} required={true} maxLength={40}></Input>
            <Input type={"text"} placeholder={"Email"} required={true} maxLength={40}/>
            <Input type={"text"} placeholder={"Password"} required={true} maxLength={50}/>
            <Input type={"text"} placeholder={"Confirm password"} required={true} maxLength={50}/>
            <Button onClick={signUp}>Sign me up!</Button>
        </form>
    )
}

export default SignUpForm