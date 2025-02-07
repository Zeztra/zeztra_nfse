import ManagerCompany from '@domain/entities/ManagerCompany';
import { PlugNotasCompanyCreateRequest } from './PlugNotasCompanyRequest';

export type TCompanyConfigureRequest = {
  managerCompany: ManagerCompany;
  company: PlugNotasCompanyCreateRequest;
};
