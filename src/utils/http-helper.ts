import { HttpResponse } from "../models/http-reponse-model"

export const ok = async (data:any):Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async ():Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: null
    }
}