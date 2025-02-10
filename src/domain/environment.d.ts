/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'local' | 'production' | 'homolog';
      PLUGNOTAS_URL_API: string;
      V1_AUTH_USER: string;
      V1_AUTH_PASS: string;
    }
  }
}

export {};
