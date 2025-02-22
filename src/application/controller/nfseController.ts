import { Request } from 'express';
import { NfseFactory } from '@application/factory/nfse';
import { ResponseController } from '@core/controller/responseController';

export class NfseController {
  static async send(req: Request): Promise<ResponseController> {
    return NfseFactory.service.send(req);
  }

  static async get(req: Request): Promise<ResponseController> {
    return NfseFactory.service.get(req);
  }

  static async cancel(req: Request): Promise<ResponseController> {
    return NfseFactory.service.cancel(req);
  }

  static async statusCancel(req: Request): Promise<ResponseController> {
    return NfseFactory.service.statusCancel(req);
  }
  
  static async pdf(req: Request): Promise<ResponseController> {
    return NfseFactory.service.pdf(req);
  }

  static async pdfRps(req: Request): Promise<ResponseController> {
    return NfseFactory.service.pdfRps(req);
  }
  
  static async xml(req: Request): Promise<ResponseController> {
    return NfseFactory.service.xml(req);
  }

  static async validate(req: Request): Promise<ResponseController> {
    return NfseFactory.service.validate(req);
  }
}
