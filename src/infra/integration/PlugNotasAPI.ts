import { IAxiosProvider } from '@application/providers/IAxiosProvider';
import { PlugNotasHeaderAPI } from '@domain/entities/PlugNotas';
import {
  PlugNotasCertificateCreateRequest,
  PlugNotasCertificateGetRequest,
} from '@domain/request/PlugNotasCertificateRequest';
import {
  PlugNotasCompanyCreateRequest,
  PlugNotasCompanyGetRequest,
} from '@domain/request/PlugNotasCompanyRequest';
import {
  PlugNotasCertificateCreateResponseError,
  PlugNotasCertificateCreateResponseSuccess,
  PlugNotasCertificateGetResponse,
} from '@domain/response/PlugNotasCertificateResponse';
import {
  PlugNotasCompanyCreateResponseError,
  PlugNotasCompanyCreateResponseSuccess,
  PlugNotasCompanyGetResponse,
} from '@domain/response/PlugNotasCompanyResponse';
import { TReturnFn } from '@domain/types';
import { axiosProvider } from '@infra/providers/implementation/AxiosProvider';

export default class PlugNotasAPI {
  private readonly axios: IAxiosProvider = axiosProvider;
  private url = '';

  constructor() {
    this.url = process.env.PLUGNOTAS_URL_API;
  }

  async getCertificate(
    config: PlugNotasHeaderAPI,
    body: PlugNotasCertificateGetRequest,
  ): Promise<TReturnFn<PlugNotasCertificateGetResponse>> {
    const response = await this.axios.get(
      `${this.url}/certificado/${body.idCertificadoOrCpfCnpj}`,
      config,
    );

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }

  async listCertificates(config: PlugNotasHeaderAPI): Promise<TReturnFn<any>> {
    const response = await this.axios.get(`${this.url}/certificado`, config);

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }

  async createCertificate(
    config: PlugNotasHeaderAPI,
    body: PlugNotasCertificateCreateRequest,
  ): Promise<
    TReturnFn<
      | PlugNotasCertificateCreateResponseSuccess
      | PlugNotasCertificateCreateResponseError
    >
  > {
    const response = await this.axios.post(
      `${this.url}/certificado`,
      config,
      body,
    );

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }

  async getCompany(
    config: PlugNotasHeaderAPI,
    body: PlugNotasCompanyGetRequest,
  ): Promise<TReturnFn<PlugNotasCompanyGetResponse>> {
    const response = await this.axios.get(
      `${this.url}/empresa/${body.cnpj}`,
      config,
    );

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }

  async listCompanies(config: PlugNotasHeaderAPI): Promise<TReturnFn<any>> {
    const response = await this.axios.get(`${this.url}/empresa`, config);

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }

  async createCompany(
    config: PlugNotasHeaderAPI,
    body: PlugNotasCompanyCreateRequest,
  ): Promise<
    TReturnFn<
      | PlugNotasCompanyCreateResponseSuccess
      | PlugNotasCompanyCreateResponseError
    >
  > {
    const response = await this.axios.post(`${this.url}/empresa`, config, body);

    if (response.error) {
      return response;
    }

    return {
      error: false,
      return: response.return.data,
    };
  }
}
