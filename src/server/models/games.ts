import { getConnection } from "../config/database";

const knex = getConnection();

export function getAll() {
    return knex('games');
};
