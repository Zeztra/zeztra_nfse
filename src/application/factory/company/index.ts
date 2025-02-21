import { CompanyService } from '@application/services/company';

export class CompanyFactory {
  static get service(): CompanyService {
    return new CompanyService();
  }
}
