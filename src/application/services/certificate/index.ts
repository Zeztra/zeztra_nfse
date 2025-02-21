import { Request } from 'express';
import {
  ok,
  fail,
  badRequest,
  ResponseController,
} from '@core/controller/responseController';
import { CertificateService as CertificateServiceClient } from 'plugnotas-client';

export class CertificateService {
  private service: CertificateServiceClient;

  constructor() {
    this.service = new CertificateServiceClient();
  }

  async create(req: Request): Promise<ResponseController> {
    const { email, senha } = req.body;
    const arquivo = req.file;

    if (!arquivo) {
      return badRequest("Parâmetro 'arquivo' é obrigatório.");
    }

    const { buffer, originalname } = arquivo;

    const formData = new FormData();
    formData.append('arquivo', new Blob([buffer]), originalname);
    formData.append('email', email);
    formData.append('senha', senha);

    const response = await this.service.create(formData);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async update(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const { email, senha } = req.body;
    const arquivo = req.file;

    if (!arquivo) {
      return badRequest("Parâmetro 'arquivo' é obrigatório.");
    }

    const { buffer, originalname } = arquivo;

    const formData = new FormData();
    formData.append('arquivo', new Blob([buffer]), originalname);
    formData.append('email', email);
    formData.append('senha', senha);

    const response = await this.service.update(id, formData);

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

  async getAll(): Promise<ResponseController> {
    const response = await this.service.getAll();

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }

  async delete(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.delete(id);

    if (response.isError()) {
      return fail(response.value.error);
    }

    return ok(response.value);
  }
}
