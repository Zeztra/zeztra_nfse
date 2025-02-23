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

  static async sendEvent(req: Request): Promise<ResponseController> {
    return NfseFactory.service.sendEvent(req);
  }

  static async getEvent(req: Request): Promise<ResponseController> {
    return NfseFactory.service.getEvent(req);
  }

  static async xmlEvent(req: Request): Promise<ResponseController> {
    return NfseFactory.service.xmlEvent(req);
  }

  static async regeneratePdf(req: Request): Promise<ResponseController> {
    return NfseFactory.service.regeneratePdf(req);
  }

  static async solve(req: Request): Promise<ResponseController> {
    return NfseFactory.service.solve(req);
  }

  static async interrupt(req: Request): Promise<ResponseController> {
    return NfseFactory.service.interrupt(req);
  }

  static async statusInterrupt(req: Request): Promise<ResponseController> {
    return NfseFactory.service.statusInterrupt(req);
  }

  static async synchronize(req: Request): Promise<ResponseController> {
    return NfseFactory.service.synchronize(req);
  }

  static async statusSynchronize(req: Request): Promise<ResponseController> {
    return NfseFactory.service.statusSynchronize(req);
  }
}
