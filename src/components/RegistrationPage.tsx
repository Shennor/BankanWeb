import React, {useRef, useState} from "react";
import SignUpForm from "./SignUpForm";

export interface SignUpInput {
    username: string,
    email: string,
    password: string,
    submittedPassword: string
}

function Welcome(props: { username: string }) {
    if (props.username == "") {
        return (
            <h1>Welcome, Username!</h1>
        )
    }
    return (
        <h1>Welcome, {props.username}!</h1>
    )
}

const RegistrationPage = () => {
    const [input, setInput] = useState<SignUpInput>({
        username: "",
        email: "",
        password: "",
        submittedPassword: ""
    })

    return (
        <div className={"registrationPage"}>
            <Welcome username={input.username}/>
            <SignUpForm {...[input, setInput]}/>
        </div>
    )
}

export default RegistrationPage