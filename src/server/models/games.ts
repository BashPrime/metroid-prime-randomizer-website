import { getConnection } from "../config/database";

const knex = getConnection();

export function getAll() {
    return knex('games');
};

export function getOneByAbbreviation(abbreviation: string) {
    return knex('games').where('abbreviation', abbreviation).first();
}
