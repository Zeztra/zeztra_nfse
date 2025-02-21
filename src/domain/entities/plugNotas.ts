export type PlugNotasHeaderAPI = {
  managerCompanyCPFCNPJ: string;
  key: string;
};

export type TTipoLogradouro =
  | 'Alameda'
  | 'Avenida'
  | 'Chácara'
  | 'Colônia'
  | 'Condomínio'
  | 'Eqnp'
  | 'Estância'
  | 'Estrada'
  | 'Fazenda'
  | 'Praça'
  | 'Prolongamento'
  | 'Rodovia'
  | 'Rua'
  | 'Sítio'
  | 'Travessa'
  | 'Vicinal';

export enum ERegimeTributario {
  'Nenhum' = 0,
  'Simples_Nacional' = 1,
  'Simples_Nacional_Excesso' = 2,
  'Regime_Normal_Lucro_Presumido' = 3,
  'Normal_Lucro Real' = 4,
  'MEI' = 5,
}

export enum ERegimeTributarioEspecial {
  'Sem_Regime_Tributário_Especial' = 1,
  'Micro_Empresa_Municipal' = 2,
  'Estimativa' = 3,
  'Sociedade_de_Profissionais' = 4,
  'Cooperativa' = 5,
  'Microempresário_Individual_MEI' = 6,
  'Microempresa_ou_Pequeno_Porte_ME EPP' = 7,
  'Lucro_Real' = 8,
  'Lucro_Presumido' = 9,
  'Tributação_Normal' = 10,
  'Simples_nacional_com_excesso_do_sublimite' = 11,
  'Empresa_de_Responsabilidade_Limitada' = 12,
}
