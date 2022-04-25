import {useState} from "react";


export const useUser = () => {
    const [userInfo, setUserInfo] = useState( JSON.parse(localStorage.getItem("userInfo")!))

    const refreshUserInfo = () => {
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")!))
    }

    return [userInfo, refreshUserInfo]
}