import { PlugNotasHeaderAPI } from '@domain/entities/PlugNotas';
import { TReturnFn } from '@domain/types';

export interface IAxiosProvider {
  get: (url: string, headers: PlugNotasHeaderAPI) => Promise<TReturnFn<any>>;
  post: (
    url: string,
    headers: PlugNotasHeaderAPI,
    data: any,
  ) => Promise<TReturnFn<any>>;
}
