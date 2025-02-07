import { ok, ResponseController } from '@core/controller/ResponseController';
import { getPlugNotasApiKey } from '@core/util/plugNotas';
import PlugNotasAPI from '@infra/integration/PlugNotasAPI';

export class PlugNotasCertificateService {
  private readonly plugNotasAPI: PlugNotasAPI;
  constructor() {
    this.plugNotasAPI = new PlugNotasAPI();
  }

  async create(): Promise<ResponseController> {
    return ok();
  }

  async list(managerCompanyCPFCNPJ: string): Promise<void> {
    try {
      const plugNotasHeaderAPI = getPlugNotasApiKey(managerCompanyCPFCNPJ);

      if (!plugNotasHeaderAPI) {
        return;
      }

      const response =
        await this.plugNotasAPI.listCertificates(plugNotasHeaderAPI);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}
