import {Component, FC} from "react";
import {store} from "../index";

interface BoardProps{

}

export const getBoards = () => {
        fetch("/api/workspace/user/1",
            {
                method: "post",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXNoYUBtYWlsLnJ1IiwiaWF0IjoxNjQ4MTQ1NjU1LCJleHAiOjE2NDgyMzIwNTV9.I0M7ddey5McDKqOTlB_tF7Sz-aMjhKoV9IRP-pPoNTJSPJguM7C77s3Ui9xiuRc1P9TEylJn0sXnsCtV91dNFw"
                },
            })
            .then(res => console.log(res))
    }



// "*/api/workspace/user/{userId}" - get list of boards of user with userId
//