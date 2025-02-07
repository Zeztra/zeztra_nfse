import ManagerCompany, { EPlayerNFSe } from '@domain/entities/ManagerCompany';
import { TObject } from '@domain/types';

export interface IManagerCompanyRepository {
  create(managerCompany: ManagerCompany): Promise<ManagerCompany>;
  auth(
    cpfCnpj: string,
    playerNFSe: EPlayerNFSe,
  ): Promise<TObject<ManagerCompany>>;
}
