import { Request, Response, Router } from 'express';

import { resJson, runAsyncWrapper } from '../../../util';
import { CompanyController } from '@application/controller/companyController';
import { validateCNPJ } from '@infra/http/middlewares/validateCnpj';

const router = Router();

router.post(
  '/',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await CompanyController.create(request)),
  ),
);

router.get(
  '/',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CompanyController.getAll());
  }),
);

router.get(
  '/:cpfCnpj',
  validateCNPJ,
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CompanyController.get(request));
  }),
);

router.patch(
  '/:cpfCnpj',
  validateCNPJ,
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await CompanyController.update(request)),
  ),
);

export default router;
