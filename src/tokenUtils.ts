import {TOKEN_COOKIE} from "./constants";


export function getToken(): String {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${TOKEN_COOKIE}=`);
    try {
        if (parts.length === 2) {
            const part = parts.pop() as String
            return part.split(';').shift() as String;
        }
        else throw new DOMException("Cookies doesn't contain token", "TokenMiss")
    }
    catch(e) {
        throw new DOMException("Error cookie parsing while getting token", "CookieParseTokenException")
    }
}
