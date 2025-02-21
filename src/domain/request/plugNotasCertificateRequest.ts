export type PlugNotasCertificateCreateRequest = {
  /**
   * Arquivo (.PFX,.CER,.P12 ou .P7) do certificado digital.
   */
  arquivo: Buffer;
  /**
   * Senha do certificado digital.
   */
  senha: string;
  /**
   * Email para recebimento de notificações sobre o vencimento do certificado digital.
   */
  email?: string;
};

export type PlugNotasCertificateGetRequest = {
  idCertificadoOrCpfCnpj: string;
};
