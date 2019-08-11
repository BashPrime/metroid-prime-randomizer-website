import { Router } from 'express';
import * as games from '../models/games';
import * as gameArticles from '../models/gameArticles';

const router = Router();

// Define routes
router.get('/', (req, res) => {
    games.getAll()
    .then(games => res.json(games));
});

// Get game by abbreviation
router.get('/:gameAbbr', (req, res) => {
    games.getOneByAbbreviation(req.params.gameAbbr)
    .then(game => res.json(game));
});

router.get('/:gameAbbr/articles', (req, res) => {
    gameArticles.getAllForGame(req.params.gameAbbr)
    .then(articles => res.json(articles));
});

router.get('/:gameAbbr/articles/:slug', (req, res) => {
  gameArticles.getOneForGame(req.params.slug, req.params.gameAbbr)
  .then(article => res.json(article));
});

export default router;
