import { EPlayerNFSe } from '@domain/entities/ManagerCompany';
import { managerCompanyRepository } from '@infra/db/mongodb/implementations/ManagerCompanyRepository';
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

        managerCompanyRepository
          .auth(managerCompanyCpfCnpj as string, EPlayerNFSe.PLUGNOTAS)
          .then((managerCompany) => {
            if (!managerCompany?.cpfCnpj) {
              return done(null, false);
            }

            return done(null, { managerCompany });
          })
          .catch(() => {
            return done(null, false);
          });
      },
    ),
  );
  return passport;
};
