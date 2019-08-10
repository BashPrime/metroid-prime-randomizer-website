import { Router } from 'express';
import * as games from '../models/games';

const router = Router();

// Define routes
router.get('/', (req, res) => {
    games.getAll()
    .then(games => res.json(games));
});

export default router;