import { Request, Response, Router } from 'express';

import { resJson, runAsyncWrapper } from '../../../util';
import { CityController } from '@application/controller/cityController';

const router = Router();

router.get(
  '/',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CityController.getAll());
  }),
);

router.get(
  '/:codigoIbge',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CityController.get(request));
  }),
);

export default router;
