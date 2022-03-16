import React, {FC, MouseEventHandler, Ref, useRef, useState} from "react";
import Input from "./UI/Input/input";
import Button from "./UI/Button/button";

interface SignUpInput {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const SignUpForm: FC = () => {
    const [input, setInput] = useState<SignUpInput>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const signUp: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if(input.password != input.confirmPassword){
            alert("Passwords are not the same!")
            return
        }
        // check data
        // make request to the server
    }

    return(
        <form>
            <input type={"text"} placeholder={"Username"} required={true} maxLength={40}
            onChange={(e) => {input.username = e.target.value}}/>
            <input type={"text"} placeholder={"Email"} required={true} maxLength={40}
            onChange={(e) => {input.email = e.target.value}}/>
            <input type={"text"} placeholder={"Password"} required={true} maxLength={50}
            onChange={(e) => {input.password = e.target.value}}/>
            <input type={"text"} placeholder={"Confirm password"} required={true} maxLength={50}
            onChange={(e) => {input.confirmPassword = e.target.value}}/>
            <Button onClick={signUp}>Sign me up!</Button>
        </form>
    )
}

export default SignUpForm