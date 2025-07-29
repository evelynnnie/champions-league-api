import { HttpResponse } from "../models/http-reponse-model"

export const ok = async (data:any):Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async ():Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Player created successfully"
        }
    }
}

export const noContent = async ():Promise<HttpResponse> => {
    return {
        statusCode: 404,
        body: null
    }
}

export const badRequest = async ():Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}