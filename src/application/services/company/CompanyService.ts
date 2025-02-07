import { ok, ResponseController } from '@core/controller/ResponseController';
import { PlugNotasCertificateService } from '../plugNotas/PlugNotasCertificateService';
import { TCompanyConfigureRequest } from '@domain/request/CompanyRequest';

export class CompanyService {
  constructor(
    private readonly plugNotasCertificateService: PlugNotasCertificateService,
  ) {}

  async configure(data: TCompanyConfigureRequest): Promise<ResponseController> {
    console.log(data);
    return ok();
  }
}
