import {getBoards} from "../controllers/BoardController";
import {store} from "../index";
import {IAuthAction} from "../actions/authAction";

interface HomePageProps{

}

export const HomePage = () => {
    let action : IAuthAction= {
        type: "login",
        payload: "",
        username: "Maria",
        userId: 1,
        token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXNoYUBtYWlsLnJ1IiwiaWF0IjoxNjQ4MTQ1NjU1LCJleHAiOjE2NDgyMzIwNTV9.I0M7ddey5McDKqOTlB_tF7Sz-aMjhKoV9IRP-pPoNTJSPJguM7C77s3Ui9xiuRc1P9TEylJn0sXnsCtV91dNFw"
    }
    store.dispatch(action)
    getBoards()
    return(
        <div>
        </div>
    )
}