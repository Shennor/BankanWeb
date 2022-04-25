import React, {useEffect, useState} from "react";
import {IUserInfo} from "../data/DTO";

export const useUser = (isFirstCall = false) => {
    const [userInfo, setUserInfo] = useState<IUserInfo>(
        (isFirstCall || localStorage.getItem("userInfo") === null) ? {
                username: "",
                login: "",
                id: -1,
                isLogged: false,
                token: ""
            }
            : JSON.parse(localStorage.getItem("userInfo")!) as IUserInfo)

    return [userInfo, setUserInfo] as [IUserInfo, React.Dispatch<React.SetStateAction<IUserInfo>>]
}