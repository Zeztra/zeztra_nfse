import { Request } from 'express';
import { CertificateFactory } from '@application/factory/certificate';
import { ResponseController } from '@core/controller/responseController';

export class CertificateController {
  static async create(req: Request): Promise<ResponseController> {
    return CertificateFactory.service.create(req);
  }

  static async get(req: Request): Promise<ResponseController> {
    return CertificateFactory.service.get(req);
  }

  static async getAll(): Promise<ResponseController> {
    return CertificateFactory.service.getAll();
  }

  static async update(req: Request): Promise<ResponseController> {
    return CertificateFactory.service.update(req);
  }

  static async delete(req: Request): Promise<ResponseController> {
    return CertificateFactory.service.delete(req);
  }
}
