export enum EPlayerNFSe {
  'PLUGNOTAS' = 'PLUGNOTAS',
}

export type TConfigNFSe = {
  key: string;
  actived: boolean;
  playerNFSe: EPlayerNFSe;
};

export default class ManagerCompany {
  cpfCnpj: string;
  configNFSe: TConfigNFSe;

  constructor(props: ManagerCompany) {
    Object.assign(this, props);
  }
}
