import { Router } from 'express';

import PlugNotasRoute from './plugnotas';

const router = Router();

router.use('/plugnotas', PlugNotasRoute);

export default router;
