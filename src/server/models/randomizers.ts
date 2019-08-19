import { getConnection } from '../config/database';
import * as games from './games';
import * as randomizersAuthors from './randomizersAuthors';

const knex = getConnection();

export function getAll() {
  return knex('randomizers')
    .then(async randomizers => {
      for(let randomizer of randomizers) {
        randomizer.game = await games.getOneByIdSync(randomizer.gameid);
        randomizer.authors = await randomizersAuthors.getAllByRandomizerIdSync(randomizer.id);
      }

      return randomizers;
    });
};
