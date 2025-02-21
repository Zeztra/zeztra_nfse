export type PlugNotasCertificateCreateResponseSuccess = {
  message: string;
  data: {
    id: string;
  };
};

export type PlugNotasCertificateCreateResponseError = {
  error: {
    message: string;
  };
};

export type PlugNotasCertificateGetResponse = {
  id: string;
  nome: string;
  hash: string;
  vencimento: string;
  email: string;
  cadastro: string;
  cnpj: string;
};
