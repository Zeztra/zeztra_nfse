import {
  ERegimeTributario,
  ERegimeTributarioEspecial,
  TTipoLogradouro,
} from '@domain/entities/plugNotas';

export type PlugNotasCompanyCreateRequest = {
  cpfCnpj: string;
  inscricaoMunicipal: string;
  razaoSocial: string;
  simplesNacional: boolean;
  regimeTributario: ERegimeTributario;

  regimeTributarioEspecial: ERegimeTributarioEspecial;

  endereco: {
    bairro: string;
    cep: string;
    codigoCidade: string;
    descricaoCidade: string;
    estado: string;
    logradouro: string;
    numero: string;
    tipoLogradouro: TTipoLogradouro;
    complemento?: string;
    codigoPais: '1058';
    descricaoPais: 'Brasil';
  };

  email: string;

  nfse: {
    ativo: boolean;
    tipo: 0 | 1;
    config: {
      producao: boolean;
    };
  };
};

export type PlugNotasCompanyGetRequest = {
  cnpj: string;
};
