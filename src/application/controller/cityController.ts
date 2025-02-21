import { Request } from 'express';
import { CityFactory } from '@application/factory/city';
import { ResponseController } from '@core/controller/responseController';

export class CityController {
  static async get(req: Request): Promise<ResponseController> {
    return CityFactory.service.get(req);
  }

  static async getAll(): Promise<ResponseController> {
    return CityFactory.service.getAll();
  }
}
