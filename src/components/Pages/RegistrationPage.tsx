import React, {useState} from "react";
import SignUpForm from "../Forms/SignUpForm";

import classes from "../../css/registration-page.module.css"
import {BigLogo} from "../../images/images";

const RegistrationPage = () => {
    const [h1State, setH1State] = useState<string>("Username")

    return (
        <div className={classes.registrationContent}>
            <h1 className={classes.greeting}>Welcome, {h1State}!</h1>
            <div className={classes.registrationContainer}>
                <SignUpForm setH1State={setH1State}/>
                <div className={classes.mainLogo}>
                    <img className="logo" src={BigLogo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage