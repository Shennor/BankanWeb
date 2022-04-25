import {useEffect, useState} from "react";

export const useUser = () => {
    const [userInfo, setUserInfo] = useState(
        (localStorage.getItem("userInfo") === null) ? {
                username: "",
                login: "",
                id: -1,
                isLogged: false,
            }
            : JSON.parse(localStorage.getItem("userInfo")!))

    useEffect(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    }, [userInfo])

    return [userInfo, setUserInfo]
}