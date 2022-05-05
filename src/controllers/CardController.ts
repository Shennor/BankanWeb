import react from "react";
import {CardInstance} from "./axios.instances";
import {ErrorType, IError} from "./errors";

export const createCard = async (listId: number, name: string, content?: JSON) => {
    try {
        let data
        if (content)
            data = {
                name: name, cardContent: content
            }
        else
            data = {name: name}
        const resp = await CardInstance.post(`/${listId}`, data)
        if (resp.status == 401)
            return {errorType: ErrorType.unauthorized} as IError
        return resp.status == 200
    } catch (e) {
        console.error(e)
        return undefined
    }
}