import { Request } from 'express';
import {
  ok,
  ResponseController,
  handleError,
} from '@core/controller/responseController';
import { CityService as CityServiceClient } from 'plugnotas-client';

export class CityService {
  private service: CityServiceClient;

  constructor() {
    this.service = new CityServiceClient();
  }

  async get(req: Request): Promise<ResponseController> {
    const { codigoIbge } = req.params;
    const response = await this.service.get(codigoIbge);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async getAll(): Promise<ResponseController> {
    const response = await this.service.getAll();

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }
}
