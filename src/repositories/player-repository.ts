import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {id: 1, name: "Lionel Messi"},
    {id: 2, name: "Cristiano Ronaldo"},
    {id: 3, name: "Neymar Jr"},
    {id: 4, name: "Kylian Mbappe"},
    {id: 5, name: "Robert Lewandowski"},
];

export const findAllPlayers = async ():Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id:number):Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
}