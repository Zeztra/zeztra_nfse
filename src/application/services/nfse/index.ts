import { Request } from 'express';
import {
  ok,
  fail,
  ResponseController,
} from '@core/controller/responseController';
import { NfseSchema, NfseService as NfseServiceClient } from 'plugnotas-client';

export class NfseService {
  private service: NfseServiceClient;

  constructor() {
    this.service = new NfseServiceClient();
  }

  async send(req: Request): Promise<ResponseController> {
    const response = await this.service.send(req.body);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async cancel(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.cancel(id, req.body);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async get(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.get(id);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async pdf(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.pdf(id);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value.arquivo);
  }

  async xml(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.xml(id);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async validate(req: Request): Promise<ResponseController> {
    const response = await NfseSchema.validate(req.body);

    if (response.isError()) {
      return fail(response.value);
    }

    return ok('NFSe válida!');
  }
}
