import { Router } from 'express';
import * as randomizers from '../models/randomizers';

const router = Router();

// Define routes
router.get('/', (req, res) => {
  randomizers.getAll()
    .then(randomizers => res.json(randomizers));
});

router.get('/:abbr', (req, res) => {
  randomizers.getOneByAbbreviation(req.params.abbr)
    .then(randomizer => {
      if (!randomizer) {
        res.status(404).send('Game not found.');
      }

      res.json(randomizer)
    });
});

export default router;
