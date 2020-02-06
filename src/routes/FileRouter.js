import { Router } from 'express';

import multer from 'multer';
import multerCongig from '../config/multer';
import FileController from '../app/controllers/FileController';

const upload = multer(multerCongig);
const router = new Router();

router.post('', upload.single('file'), FileController.store);

export default router;
