import { Router } from 'express';

import plugNotasRoute from './plugnotas';
import passport from 'passport';

const passportAuth = passport.authenticate('AuthV1PlugNotas', {
  session: false,
});

const router = Router();

router.use('/plugnotas', passportAuth, plugNotasRoute);

export default router;
