import { getConnection } from '../config/database';
import * as games from './games';

const knex = getConnection();

export function getAll() {
  return knex('randomizers')
    .then(async randomizers => {
      for(let randomizer of randomizers) {
        randomizer.game = await games.getOneByIdSync(randomizer.gameid);
        delete randomizer.gameid;
      }

      return randomizers;
    });
};
