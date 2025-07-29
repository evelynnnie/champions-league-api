import { findAllClubs } from "../repositories/clubs-repository";
import * as httpResponse from "../utils/http-helper";

export const getClubsService = async () => {
    const data = await findAllClubs();

    const response = httpResponse.ok(data);
    return response;
}