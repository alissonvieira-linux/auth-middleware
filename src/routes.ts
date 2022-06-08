import { isAuthenticated } from '@middlewares/isAuthenticated';
import { Router } from 'express';
import { auth } from './routes/auth';
import { dashboard } from './routes/dashboard';

export const router = Router();

router.post("/auth", auth);
router.get('/dashboard', isAuthenticated, dashboard);