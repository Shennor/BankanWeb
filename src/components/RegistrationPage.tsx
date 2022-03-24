import React, {useState} from "react";
import SignUpForm from "./SignUpForm";

const RegistrationPage = () => {
    const [h1State, setH1State] = useState<string>("Username")

    return (
        <div className={"registrationPage"}>
            <h1>Welcome, {h1State}!</h1>
            <SignUpForm setH1State={setH1State}/>
        </div>
    )
}

export default RegistrationPage