import {IUserInfo} from "../data/DTO";
import {Navigate} from "react-router-dom";
import React from "react";


export const useNavigateUnauthorized = () => {
    if(localStorage.getItem("userInfo") === null ||
    JSON.parse(localStorage.getItem("userInfo")!).id == -1)
        return <Navigate to="/about"/>
}

export const useNavigateAuthorized = () => {
    console.log(localStorage.getItem("userInfo") != undefined &&
        JSON.parse(localStorage.getItem("userInfo")!).id != -1)
    if (localStorage.getItem("userInfo") != null &&
        JSON.parse(localStorage.getItem("userInfo")!).id != -1)
        return <Navigate to="/home"/>
}
