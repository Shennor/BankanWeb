import React, {FC} from "react";
import SignInForm from "./SignInForm";
import {Link} from "react-router-dom";


export const LoginPage : FC = () => {
    return(
        <div className={"loginPage"}>
            <Link to={"../home"}> Home </Link>
            <h1>Sign In</h1>
            <SignInForm/>
        </div>
    )
}