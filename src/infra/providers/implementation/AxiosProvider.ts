import axios, { AxiosRequestConfig } from 'axios';

import { TReturnFn } from '@domain/types';
import { IAxiosProvider } from '@application/providers/IAxiosProvider';
import { PlugNotasHeaderAPI } from '@domain/entities/PlugNotas';

class AxiosProvider implements IAxiosProvider {
  errorHandle = (response: any): TReturnFn<any> => {
    const error = response?.data ?? response;

    return {
      error: true,
      return: error?.return
        ? error
        : {
            payload: {
              error: error ?? 'Falha ao se comunicar com a Zeztra.',
            },
          },
    };
  };

  configureHeaders = (config: PlugNotasHeaderAPI) => {
    const headers: any = {
      'X-API-KEY': config.key,
    };

    return headers;
  };

  async get(
    url: string,
    configAPI: PlugNotasHeaderAPI,
  ): Promise<TReturnFn<any>> {
    try {
      const config: AxiosRequestConfig = {
        method: 'GET',
        url,
        headers: this.configureHeaders(configAPI),
      };

      return {
        error: false,
        return: await axios(config),
      };
    } catch (err: any) {
      return this.errorHandle(err?.response);
    }
  }

  async post(
    url: string,
    configAPI: PlugNotasHeaderAPI,
    data: any,
  ): Promise<TReturnFn<any>> {
    try {
      const config: AxiosRequestConfig = {
        method: 'POST',
        url,
        headers: this.configureHeaders(configAPI),
        data,
      };

      return {
        error: false,
        return: await axios(config),
      };
    } catch (err: any) {
      return this.errorHandle(err?.response);
    }
  }
}

export const axiosProvider = new AxiosProvider();
