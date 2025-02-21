import { CityService } from '@application/services/city';

export class CityFactory {
  static get service(): CityService {
    return new CityService();
  }
}
