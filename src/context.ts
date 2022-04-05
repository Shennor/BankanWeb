import React, {useState} from "react";
import {IBoard, ILoginResponse, IWorkspace} from "./data/DTO";

export type UserState = [
    {
        token: string,
        id: number,
        login: string,
        isLogged: boolean,
        username: string,
    },
    React.Dispatch<React.SetStateAction<{
        token: string,
        id: number,
        login: string,
        isLogged: boolean,
        username: string,
    }>>
];

export type WorkspaceState = [
    IWorkspace,
    React.Dispatch<React.SetStateAction<IWorkspace>>
];

export type BoardState = [
    IBoard,
    React.Dispatch<React.SetStateAction<IBoard>>
];

export const UserContext = React.createContext<UserState | undefined>(undefined)

export const WorkspaceContext = React.createContext<WorkspaceState | undefined>(undefined)

export const BoardContext = React.createContext<BoardState | undefined>(undefined)

