import { Router } from 'express';
import * as games from '../models/games';

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

export default router;