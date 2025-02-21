import passport from 'passport';
import { Express } from 'express';

import authenticationV1 from './authenticationV1';

const middlewares = (app: Express): void => {
  passport.serializeUser((user: Express.User, done) => {
    done(null, user);
  });

  passport.deserializeUser((user: Express.User, done) => {
    done(null, user);
  });

  authenticationV1();

  app.use(passport.initialize());
};

export { middlewares };
