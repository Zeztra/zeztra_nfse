import { Request, Response, Router } from 'express';

import { resJson, resPDF, runAsyncWrapper } from '../../../util';
import { NfseController } from '@application/controller/nfseController';

const router = Router();

router.post(
  '/',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.send(request)),
  ),
);

router.post(
  '/validate',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.validate(request)),
  ),
);

router.get(
  '/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.get(request));
  }),
);

router.post(
  '/cancelar/:id',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.cancel(request)),
  ),
);

router.get(
  '/cancelar/status/:protocol',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.statusCancel(request)),
  ),
);

router.get(
  '/pdf/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resPDF(response, await NfseController.pdf(request));
  }),
);

router.get(
  '/rps/pdf/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resPDF(response, await NfseController.pdfRps(request));
  }),
);

router.get(
  '/xml/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.xml(request));
  }),
);

router.post(
  '/eventos/:id',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.sendEvent(request)),
  ),
);

router.get(
  '/eventos/:id',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.getEvent(request)),
  ),
);

router.get(
  '/eventos/:id/:protocol/xml',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.xmlEvent(request));
  }),
);

router.post(
  '/pdf/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.regeneratePdf(request));
  }),
);

router.post(
  '/resolve/:id',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.solve(request));
  }),
);

router.post(
  '/interromper',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.interrupt(request));
  }),
);

router.get(
  '/interromper/status/:protocol',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.statusInterrupt(request)),
  ),
);

router.post(
  '/sincronizar',
  runAsyncWrapper(async (request: Request, response: Response) => {
    resJson(response, await NfseController.synchronize(request));
  }),
);

router.get(
  '/sincronizar/status/:protocol',
  runAsyncWrapper(async (request: Request, response: Response) =>
    resJson(response, await NfseController.statusSynchronize(request)),
  ),
);

export default router;
