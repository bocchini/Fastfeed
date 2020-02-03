import { Router } from 'express';

import RecipientController from '../app/controllers/RecipientController';

const router = new Router();

router.post('', RecipientController.store);
router.put('', RecipientController.update);

export default router;
