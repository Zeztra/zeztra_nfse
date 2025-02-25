import { Request } from 'express';
import {
  ok,
  ResponseController,
  handleError,
} from '@core/controller/responseController';
import { CityService as CityServiceClient } from 'plugnotas-client';
import redisCache from '@infra/cache/redisCache';
import { keyCacheCities } from '@core/util/constants';
import { City } from '@domain/entities/city';

export class CityService {
  private service: CityServiceClient;

  constructor() {
    this.service = new CityServiceClient();
  }

  private async saveCache(data: object): Promise<void> {
    try {
      await redisCache.setValue(keyCacheCities, JSON.stringify(data), 86400);
    } catch (error) {
      console.error('Erro ao salvar cache das cidades.', error);
    }
  }

  async get(req: Request): Promise<ResponseController> {
    const { codigoIbge } = req.params;

    let cities: City[] = [];

    const citiesCache = await redisCache.getKey(keyCacheCities);
    if (citiesCache) {
      cities = JSON.parse(citiesCache) as City[];
      const city = cities.find((city) => city.id === Number(codigoIbge));
      if (city) return ok(city);
    }

    const response = await this.service.get(codigoIbge);

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    cities.push(response.value);

    await this.saveCache(cities);

    return ok(response.value);
  }

  async getAll(): Promise<ResponseController> {
    const response = await this.service.getAll();

    if (response.isError()) {
      const { error, statusCode } = response.value;
      return handleError(error, statusCode);
    }

    await this.saveCache(response.value);

    return ok(response.value);
  }
}
