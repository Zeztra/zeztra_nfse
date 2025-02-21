import { Request, Response, Router } from 'express';
import Multer from 'multer';

import { resJson, runAsyncWrapper } from '../../../util';
import { CertificateController } from '@application/controller/certificateController';

const upload = Multer();
const router = Router();

router.post(
  '/',
  upload.single('arquivo'),
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await CertificateController.create(request)),
  ),
);

router.get(
  '/',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CertificateController.getAll());
  }),
);

router.get(
  '/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await CertificateController.get(request));
  }),
);

router.put(
  '/:id',
  upload.single('arquivo'),
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await CertificateController.update(request)),
  ),
);

router.delete(
  '/:id',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await CertificateController.delete(request)),
  ),
);

export default router;
