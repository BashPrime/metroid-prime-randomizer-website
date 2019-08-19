import { Router } from 'express';
import * as randomizers from '../models/randomizers';

const router = Router();

// Define routes
router.get('/', (req, res) => {
  randomizers.getAll()
    .then(randomizers => res.json(randomizers));
});

export default router;
