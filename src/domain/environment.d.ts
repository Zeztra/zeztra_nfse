/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'local' | 'production' | 'homolog';
      URL_API_ZEZTRA: string;
      CRYPTO_KEY_DEFAULT: string;
      MONGO_HOST: string;
      MONGO_PORT: number;
      MONGO_USER: string;
      MONGO_PASS: string;
      MONGO_DB: string;
      REDIS_HOST: string;
      REDIS_PORT: number;
      SSL_FOLDER: string;
      REDIS_PASSWORD: string;
      VALIDE_KEYS: string;
      WORKER_ENABLED: 'true' | 'false';
      CNAB_FOLDER: string;
      AWS_LOPES: string;
    }
  }
}

export {};
