import { Request } from 'express';
import {
  ok,
  handleError,
  ResponseController,
} from '@core/controller/responseController';
import {
  validatorSchema,
  NfseService as NfseServiceClient,
} from 'plugnotas-client';

export class NfseService {
  private service: NfseServiceClient;

  constructor() {
    this.service = new NfseServiceClient();
  }

  async send(req: Request): Promise<ResponseController> {
    const responseValidator = await validatorSchema.nfse(req.body);

    if (responseValidator.isError()) {
      return handleError(responseValidator.value, 400);
    }

    const response = await this.service.send(req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async cancel(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.cancel(id, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async statusCancel(req: Request): Promise<ResponseController> {
    const { protocol } = req.params;
    const response = await this.service.statusCancel(protocol);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async get(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.get(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async pdf(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.pdf(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value.file);
  }

  async pdfRps(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.pdfRps(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value.file);
  }

  async xml(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.xml(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value.file);
  }

  async validate(req: Request): Promise<ResponseController> {
    const response = await validatorSchema.nfse(req.body);

    if (response.isError()) {
      return handleError(response.value, 400);
    }

    return ok();
  }

  async sendEventos(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.sendEventos(id, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async getEventos(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.getEventos(id, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async xmlEventos(req: Request): Promise<ResponseController> {
    const { id, protocol } = req.params;
    const response = await this.service.xmlEventos(id, protocol);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }
}
