export const isValidCNPJ = (value: string): boolean => {
  // Remove caracteres não numéricos
  const cnpj = value.replace(/[^\d]+/g, '');

  // CNPJ deve ter 14 dígitos
  if (cnpj.length !== 14) return false;

  // Verifica se todos os dígitos são iguais (ex: 00.000.000/0000-00)
  if (/^(\d)\1+$/.test(cnpj)) return false;

  return true;
};
