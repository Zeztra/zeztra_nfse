import { PlugNotasHeaderAPI } from '@domain/entities/PlugNotas';

export const getPlugNotasApiKey = (
  managerCompanyCPFCNPJ: string,
): PlugNotasHeaderAPI | null => {
  try {
    const apiKeys = JSON.parse(process.env.PLUGNOTAS_KEYS_API as string);

    const managerCompanyApiKey = apiKeys.find(
      (x: PlugNotasHeaderAPI) =>
        x.managerCompanyCPFCNPJ === managerCompanyCPFCNPJ,
    );

    if (!managerCompanyApiKey) {
      return null;
    }

    return managerCompanyApiKey;
  } catch (err) {
    console.log(err);
    return null;
  }
};
