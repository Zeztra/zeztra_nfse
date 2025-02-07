import { Router } from 'express';

import CompanyRoute from './company';

const router = Router();

router.use('/company', CompanyRoute);

export default router;
