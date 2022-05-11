import React, {FC, MouseEventHandler, useState} from "react";
import Input from "../UI/Input/input";
import {register} from "../../controllers/AuthController";
import classes from "../../css/form.module.css";
import {Button} from "react-bootstrap";
import {CianButton} from "../UI/Button/button";
import { Navigate } from "react-router-dom";

export interface ISignUpInput {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

interface SignUpFormProps {
    setH1State: (s: string) => void,
}


const SignUpForm: FC<SignUpFormProps> = ({setH1State}) => {
    const [input, setInput] = useState<ISignUpInput>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [registered, setRegistered] = useState(false)

    const validateEmail = (email : string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const signUp: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        if(input.password !== input.confirmPassword){
            alert("Passwords are not the same!")
            return
        }
        if(!validateEmail(input.email)){
            alert("Email validation failed!")
            return
        }
        // check data
        // TODO: exception handling
        register(input.username, input.email, input.password)
        setRegistered(prev => true)
    }

    const redirectRegistered = () => {
        if(registered)
            return <Navigate to="/login"/>
    }

    return(
        <div>
            {redirectRegistered()}
            <form className={classes.authForm}>
                <ul>
                    <li className={classes.inputContainer}>
                        <h5>Username:</h5>
                        <input type="text" placeholder="Username" required={true} maxLength={40}
                               onChange={(e) => {
                                   input.username = e.target.value
                                   setH1State(input.username)
                               }}/>
                    </li>
                    <li className={classes.inputContainer}>
                        <h5>Email:</h5>
                        <input type="email" placeholder="Email" required={true} maxLength={40}
                               onChange={(e) => {input.email = e.target.value}}/>
                    </li>
                    <li className={classes.inputContainer}>
                        <h5>Password:</h5>
                        <input type="password" placeholder="Password" required={true} maxLength={50}
                               onChange={(e) => {input.password = e.target.value}}/>
                    </li>
                    <li className={classes.inputContainer}>
                        <h5></h5>
                        <input type="password" placeholder="Confirm password" required={true} maxLength={50}
                               onChange={(e) => {input.confirmPassword = e.target.value}}/>
                    </li>
                </ul>
                <CianButton onClick={signUp}>Sign me up!</CianButton>
            </form>
        </div>
    )
}

export default SignUpForm