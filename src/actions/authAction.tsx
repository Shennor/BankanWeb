import {Action} from "@reduxjs/toolkit";

export interface IAuthAction extends Action{
    username: string,
    userId: number
}