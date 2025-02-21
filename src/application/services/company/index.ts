import { Request } from 'express';
import {
  ok,
  fail,
  ResponseController,
} from '@core/controller/responseController';
import { CompanyService as CompanyServiceClient } from 'plugnotas-client';

export class CompanyService {
  private service: CompanyServiceClient;

  constructor() {
    this.service = new CompanyServiceClient();
  }

  async create(req: Request): Promise<ResponseController> {
    const response = await this.service.create(req.body);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async update(req: Request): Promise<ResponseController> {
    const { cpfCnpj } = req.params;
    const response = await this.service.update(cpfCnpj, req.body);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async get(req: Request): Promise<ResponseController> {
    const { cpfCnpj } = req.params;
    const response = await this.service.get(cpfCnpj);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async getAll(): Promise<ResponseController> {
    const response = await this.service.getAll();

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }
}
