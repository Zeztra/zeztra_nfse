import { Request, Response, Router } from 'express';

import { resJson, runAsyncWrapper } from '../../../../util';
import { companyController } from '@application/controller/CompanyController';
import passport from 'passport';

const router = Router();

const passportAuth = passport.authenticate('AuthV1PlugNotas', {
  session: false,
});

router.post(
  '/configure',
  passportAuth,
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await companyController.configure({ ...request })),
  ),
);

export default router;
