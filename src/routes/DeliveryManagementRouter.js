import { Router } from 'express';

import DeliveryManagement from '../app/controllers/DeliveryManagementController';

const router = new Router();

router.post('', DeliveryManagement.store);
router.put('', DeliveryManagement.update);
router.get('', DeliveryManagement.index);
router.delete('/:id', DeliveryManagement.delete);

export default router;
