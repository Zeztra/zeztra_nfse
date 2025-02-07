import routeV1 from './v1';

const routes = (app: any): any => {
  app.use('/v1', routeV1);
};

export { routes };
