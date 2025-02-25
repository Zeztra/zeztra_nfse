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
import { HttpStatusCode } from 'axios';

export class NfseService {
  private service: NfseServiceClient;

  constructor() {
    this.service = new NfseServiceClient();
  }

  async send(req: Request): Promise<ResponseController> {
    const responseValidator = validatorSchema.nfse(req.body);

    if (responseValidator.isError()) {
      return handleError(responseValidator.value, HttpStatusCode.BadRequest);
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

  async consult(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.consult(id);

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
    const response = validatorSchema.nfse(req.body);

    if (response.isError()) {
      return handleError(response.value, HttpStatusCode.BadRequest);
    }

    return ok();
  }

  async sendEvent(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.sendEvent(id, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async getEvent(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const type = req.query.tipoEvento as string;
    const response = await this.service.getEvent(id, type);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async xmlEvent(req: Request): Promise<ResponseController> {
    const { id, protocol } = req.params;
    const response = await this.service.xmlEvent(id, protocol);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async regeneratePdf(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.regeneratePdf(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async solve(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.solve(id, req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async interrupt(req: Request): Promise<ResponseController> {
    const response = await this.service.interrupt(req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async statusInterrupt(req: Request): Promise<ResponseController> {
    const { protocol } = req.params;
    const response = await this.service.statusInterrupt(protocol);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async synchronize(req: Request): Promise<ResponseController> {
    const response = await this.service.synchronize(req.body);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async statusSynchronize(req: Request): Promise<ResponseController> {
    const { protocol } = req.params;
    const response = await this.service.statusSynchronize(protocol);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }
}
