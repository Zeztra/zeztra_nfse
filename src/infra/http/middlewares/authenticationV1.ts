import passport, { PassportStatic } from 'passport';
import { BasicStrategy } from 'passport-http';
import { ApiConfig } from 'plugnotas-client';

export default (): PassportStatic => {
  passport.use(
    'AuthV1PlugNotas',
    new BasicStrategy(
      {
        passReqToCallback: true,
      },
      async (req, userId, password, done) => {
        const xApiKey = req.headers['x-api-key'];

        if (!userId || !password || !xApiKey) {
          return done(null, false);
        }

        if (
          process.env.V1_AUTH_USER !== userId ||
          process.env.V1_AUTH_PASS !== password
        ) {
          return done(null, false);
        }

        const apiConfig = ApiConfig.getInstance();
        apiConfig.apiKey = xApiKey as string;

        return done(null, {
          xApiKey,
        });
      },
    ),
  );
  return passport;
};
