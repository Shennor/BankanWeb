import {useState} from "react";

export const API = "http://localhost:8080/api/"
export const WORKSPACE = "workspace/"
export const BOARD = "board/"
export const LIST = "list/"
export const AUTH = "auth/"

export const ACCESS_CONTROL_ALLOW_ORIGIN = "http://localhost:8080"

export const TOKEN_COOKIE = "token"

export const HOURS_TO_EXPIRE = 8;

export function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}