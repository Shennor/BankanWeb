import {IUserInfo} from "../data/DTO";
import {Navigate} from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";


export const useNavigateUnauthorized = (userInfo : IUserInfo) => {
    if(!userInfo.isLogged)
        return <Navigate to="/about"/>
}

export const useNavigateAuthorized = (userInfo: IUserInfo) => {
    if (userInfo.isLogged)
        return <Navigate to="/home"/>
}
