/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: 'local' | 'production' | 'homolog';
      PLUGNOTAS_URL_API: string;
      MONGO_HOST: string;
      MONGO_PORT: number;
      MONGO_USER: string;
      MONGO_PASS: string;
      MONGO_DB: string;
      AWS_END_POINT: string;
      AWS_REGION: string;
      AWS_ACCESS_KEY: string;
      AWS_SECRET_KEY: string;
      V1_AUTH_USER: string;
      V1_AUTH_PASS: string;
    }
  }
}

export {};
