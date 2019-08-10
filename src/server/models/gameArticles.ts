import { getConnection } from "../config/database";

const knex = getConnection();

export function getAllForGame(gameAbbreviation: string) {
    return knex('games').where('abbreviation', gameAbbreviation).first()
    .then(game => {
        return knex('games_articles').where('gameid', game.id);
    });
};
