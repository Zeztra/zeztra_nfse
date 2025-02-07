/* eslint-disable @typescript-eslint/naming-convention */
import ManagerCompany from '@domain/entities/ManagerCompany';
import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      ManagerCompany: ManagerCompany;
    };
  }
}

export { Request };
