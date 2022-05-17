import {BigLogo, Logo} from "../../images/images";
import "../../css/about-page.css"

export const AboutPage = () => {

    return(
        <div className={"aboutPage"}>
            <div className={"aboutGreeting"}>
                <h1>Hello World!</h1>
            </div>
            <div className={"row"}>
                <div className={"mainLogo"}>
                    <img src={BigLogo}/>
                </div>
                <div className={"about"}>
                    We are Aleksandrov Nikita and Sharipova Elvira - MEPhI students. This site represents our 2nd year course project in Software Engineering.
                    The server is written by both of us. The client part is separate: website - Elvira, android application - Nikita.
                    We used:
                    server - Kotlin, Spring framework, MySql
                    website - Typescript, React
                </div>
            </div>
        </div>
    )
}