import { Router } from 'express';

import cityRoute from './city';
import certificateRoute from './certificate';
import companyRoute from './company';
import nfseRoute from './nfse';

const router = Router();

router.use('/city', cityRoute);
router.use('/certificate', certificateRoute);
router.use('/company', companyRoute);
router.use('/nfse', nfseRoute);

export default router;
