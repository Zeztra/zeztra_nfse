import { companyFactory } from '@application/factory/company/CompanyFactory';
import { ResponseController } from '@core/controller/ResponseController';

class CompanyController {
  async configure(event: any): Promise<ResponseController> {
    return companyFactory.configure({
      managerCompanyCpfCnpj: event.user.managerCompanyCpfCnpj,
      company: { ...event.body },
    });
  }
}
const companyController = new CompanyController();

export { companyController };
