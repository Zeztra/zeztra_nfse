import { Request } from 'express';
import {
  ok,
  ResponseController,
  handleError,
} from '@core/controller/responseController';
import { CertificateService as CertificateServiceClient } from 'plugnotas-client';
import { HttpStatusCode } from 'axios';

export class CertificateService {
  private service: CertificateServiceClient;
  private listError: string[];

  constructor() {
    this.service = new CertificateServiceClient();
    this.listError = [];
  }

  private handleRequest(req: Request): ResponseController | void {
    const { senha } = req.body;
    const arquivo = req.file;

    if (!arquivo) {
      this.listError.push("Parâmetro 'arquivo' é obrigatório.");
    }

    if (!senha) {
      this.listError.push("Parâmetro 'senha' é obrigatório.");
    }

    if (this.listError.length > 0) {
      const error = {
        message: 'Falha na validação de esquema.',
        data: this.listError,
      };

      return handleError(error, HttpStatusCode.BadRequest);
    }
  }

  async create(req: Request): Promise<ResponseController> {
    const isResponse = this.handleRequest(req);

    if (isResponse) {
      return isResponse;
    }

    const { email, senha } = req.body;
    const arquivo = req.file;

    const { buffer, originalname } = arquivo!;

    const formData = new FormData();
    formData.append('arquivo', new Blob([buffer]), originalname);
    formData.append('email', email);
    formData.append('senha', senha);

    const response = await this.service.create(formData);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async update(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const isResponse = this.handleRequest(req);

    if (isResponse) {
      return isResponse;
    }

    const { email, senha } = req.body;
    const arquivo = req.file;

    const { buffer, originalname } = arquivo!;

    const formData = new FormData();
    formData.append('arquivo', new Blob([buffer]), originalname);
    formData.append('email', email);
    formData.append('senha', senha);

    const response = await this.service.update(id, formData);

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

  async getAll(): Promise<ResponseController> {
    const response = await this.service.getAll();

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }

  async delete(req: Request): Promise<ResponseController> {
    const { id } = req.params;
    const response = await this.service.delete(id);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    return ok(response.value);
  }
}
