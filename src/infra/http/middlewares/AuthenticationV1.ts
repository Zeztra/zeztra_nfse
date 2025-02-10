import passport, { PassportStatic } from 'passport';
import { BasicStrategy } from 'passport-http';

export default (): PassportStatic => {
  passport.use(
    'AuthV1PlugNotas',
    new BasicStrategy(
      {
        passReqToCallback: true,
      },
      async (req, userId, password, done) => {
        const managerCompanyCpfCnpj = req.headers['x-manager-company-cpfcnpj'];

        if (!userId || !password || !managerCompanyCpfCnpj) {
          return done(null, false);
        }

        if (
          process.env.V1_AUTH_USER !== userId ||
          process.env.V1_AUTH_PASS !== password
        ) {
          return done(null, false);
        }

        return done(null, {
          managerCompanyCpfCnpj,
        });
      },
    ),
  );
  return passport;
};
