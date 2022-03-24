import {Action} from "@reduxjs/toolkit";

export interface IAuthAction extends Action{
    payload: string,
    username: string,
    userId: number,
    token: string
}