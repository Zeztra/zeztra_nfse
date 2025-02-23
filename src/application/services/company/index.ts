import { Request } from 'express';
import {
  ok,
  ResponseController,
  handleError,
} from '@core/controller/responseController';
import {
  CompanyService as CompanyServiceClient,
  validatorSchema,
} from 'plugnotas-client';
import { HttpStatusCode } from 'axios';

export class CompanyService {
  private service: CompanyServiceClient;

  constructor() {
    this.service = new CompanyServiceClient();
  }

  async create(req: Request): Promise<ResponseController> {
    const validator = validatorSchema.company(req.body);
    if (validator.isError()) {
      return handleError(validator.value, HttpStatusCode.BadRequest);
    }

    const response = await this.service.create(req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async update(req: Request): Promise<ResponseController> {
    const validator = validatorSchema.companyUpdate(req.body);
    if (validator.isError()) {
      return handleError(validator.value, HttpStatusCode.BadRequest);
    }

    const { cpfCnpj } = req.params;
    const response = await this.service.update(cpfCnpj, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async get(req: Request): Promise<ResponseController> {
    const { cpfCnpj } = req.params;
    const response = await this.service.get(cpfCnpj);

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
