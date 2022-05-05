import React, {useState} from "react";
import {IBoard, IBoardInfo, ILoginResponse, IUserInfo, IWorkspace} from "./data/DTO";

export type UserState = [
    IUserInfo,
    React.Dispatch<React.SetStateAction<IUserInfo>>
];

export type WorkspaceState = [
    IWorkspace,
    React.Dispatch<React.SetStateAction<IWorkspace>>
];

export type BoardState = [
    IBoard,
    React.Dispatch<React.SetStateAction<IBoard>>
];


export type UpdateState = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
];

export const UpdateContext = React.createContext<UpdateState | undefined>(undefined)

export const UserContext = React.createContext<UserState | undefined>(undefined)

export const WorkspaceContext = React.createContext<WorkspaceState | undefined>(undefined)

export const BoardContext = React.createContext<BoardState | undefined>(undefined)
