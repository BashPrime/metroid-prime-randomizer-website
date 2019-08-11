import { getConnection } from "../config/database";

const knex = getConnection();

export function getAllForGame(gameAbbreviation: string) {
    return knex('games').where('abbreviation', gameAbbreviation).first()
    .then(game => {
        return knex('games_articles').where('gameid', game.id);
    })
    .then(articles => {
      articles.forEach(article => {
        if (article && article.content)
          article.content = parseContent(article.content);
      });

      return articles;
    });
};

export function getOneForGame(articleName: string, gameAbbreviation: string) {
  return knex('games').where('abbreviation', gameAbbreviation).first()
    .then(game => {
        return knex('games_articles').where('gameid', game.id).andWhere('name', articleName).first();
    })
    .then(article => {
      if (article && article.content)
        article.content = parseContent(article.content);

      return article;
    });
}

function parseContent(content: string) {
  return JSON.parse(content);
}
