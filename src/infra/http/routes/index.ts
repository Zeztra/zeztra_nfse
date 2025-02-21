import routeV1 from './v1';
import { Express } from 'express';

const routes = (app: Express): void => {
  app.use('/v1', routeV1);
};

export { routes };
