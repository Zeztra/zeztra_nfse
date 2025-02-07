import passport from 'passport';

import authenticationV1 from './AuthenticationV1';

const middlewares = (app: any): void => {
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
