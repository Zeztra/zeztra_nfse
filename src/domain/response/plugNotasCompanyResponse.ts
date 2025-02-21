import {
  ERegimeTributario,
  ERegimeTributarioEspecial,
} from '@domain/entities/plugNotas';

export type PlugNotasCompanyCreateResponseSuccess = {
  message: string;
  data: {
    cnpj: string;
  };
};

export type PlugNotasCompanyCreateResponseError = {
  error: {
    message: string;
    data: any;
  };
};

export type PlugNotasCompanyGetResponse = {
  endereco: {
    codigoPais: string;
    descricaoPais: string;
    tipoLogradouro: string;
    logradouro: string;
    numero: string;
    complemento: string;
    tipoBairro: string;
    bairro: string;
    codigoCidade: string;
    descricaoCidade: string;
    estado: string;
    cep: string;
  };
  telefone: {
    ddd: string;
    numero: string;
  };
  logotipo: {
    fileName: string;
  };
  nfse: {
    config: {
      rps: {
        lote: number;
        numeracao: [
          {
            serie: string;
            numero: number;
          },
        ];
        numeracaoAutomatica: true;
        agrupaLoteAutomatico: true;
        agrupaLoteComSerieAutomatico: boolean;
      };
      prefeitura: {
        login: string;
        senha: string;
      };
      email: {
        envio: boolean;
      };
      producao: boolean;
      nfseNacional: boolean;
      consultaNfseNacional: boolean;
    };
    ativo: boolean;
    tipoContrato: 0 | 1;
  };
  incentivoFiscal: boolean;
  incentivadorCultural: boolean;
  _id: string;
  cpfCnpj: string;
  inscricaoEstadual: string;
  inscricaoMunicipal: string;
  razaoSocial: string;
  simplesNacional: boolean;
  regimeTributario: ERegimeTributario;
  regimeTributarioEspecial: ERegimeTributarioEspecial;
  email: string;
  certificado: string;
  createdAt: string;
  updatedAt: string;
  nomeFantasia: string;
};
