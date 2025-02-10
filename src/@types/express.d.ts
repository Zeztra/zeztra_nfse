/* eslint-disable @typescript-eslint/naming-convention */
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      managerCompanyCpfCnpj: string;
    };
  }
}

export { Request };
