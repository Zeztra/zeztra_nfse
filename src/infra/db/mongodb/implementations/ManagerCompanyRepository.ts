import ManagerCompany, { EPlayerNFSe } from '@domain/entities/ManagerCompany';
import { managerCompanySchema } from '../schema/ManagerCompany';
import { IManagerCompanyRepository } from '@application/repository/IManagerCompanyRepository';
import { TObject } from '@domain/types';

class ManagerCompanyRepository implements IManagerCompanyRepository {
  async create(
    managerCompanyRepository: ManagerCompany,
  ): Promise<ManagerCompany> {
    const newManagerCompanyRepository = await managerCompanySchema.create(
      managerCompanyRepository,
    );
    return new ManagerCompany(newManagerCompanyRepository.toObject());
  }

  auth(
    cpfCnpj: string,
    playerNFSe: EPlayerNFSe,
  ): Promise<TObject<ManagerCompany>> {
    return managerCompanySchema
      .findOne({
        cpfCnpj,
        'configNFSe.actived': true,
        'configNFSe.playerNFSe': playerNFSe,
      })
      .lean()
      .exec();
  }
}

export const managerCompanyRepository = new ManagerCompanyRepository();
