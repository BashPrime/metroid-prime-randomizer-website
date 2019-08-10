import { Router } from "express";
import * as packageJson from '../../../package.json';

export function getMainController(): Router {
    const router = Router();

    router.get('/', (req, res) => res.send('metroid-prime-randomizer API v' + packageJson.version));

    return router;
};
