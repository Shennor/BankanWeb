import React, {FC} from "react";
import SignInForm from "./SignInForm";


export const LoginPage : FC = () => {
    return(
        <div className={"loginPage"}>
            <h1>Sign In</h1>
            <SignInForm/>
        </div>
    )
}