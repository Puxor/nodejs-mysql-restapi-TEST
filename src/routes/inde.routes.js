import { Router } from 'express';
import { ping } from '../controllers/index.controllers.js';

const router = Router();

// Define tu ruta usando router.get en lugar de app.get
router.get('/ping', ping);

export default router;
