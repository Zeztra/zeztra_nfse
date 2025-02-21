import { Request } from 'express';
import { CompanyFactory } from '@application/factory/company';
import { ResponseController } from '@core/controller/responseController';

export class CompanyController {
  static async create(req: Request): Promise<ResponseController> {
    return CompanyFactory.service.create(req);
  }

  static async get(req: Request): Promise<ResponseController> {
    return CompanyFactory.service.get(req);
  }

  static async getAll(): Promise<ResponseController> {
    return CompanyFactory.service.getAll();
  }

  static async update(req: Request): Promise<ResponseController> {
    return CompanyFactory.service.update(req);
  }
}
