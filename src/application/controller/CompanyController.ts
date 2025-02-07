import { companyFactory } from '@application/factory/company/CompanyFactory';
import { ResponseController } from '@core/controller/ResponseController';

class CompanyController {
  async configure(event: any): Promise<ResponseController> {
    return companyFactory.configure({
      managerCompany: event.user.managerCompany,
    });
  }
}
const companyController = new CompanyController();

export { companyController };
