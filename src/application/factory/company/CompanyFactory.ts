import { CompanyService } from '@application/services/company/CompanyService';
import { plugNotasCertificateFactory } from '../plugNotas/PlugNotasCertificateFactory';

const companyFactory = new CompanyService(plugNotasCertificateFactory);

export { companyFactory };
