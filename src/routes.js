import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

// Routers
import UserRouter from './routes/UserRoutes';
import SessionRouter from './routes/SessionRoutes';
import RecipientRouter from './routes/RecipientRouter';

const routes = new Router();

routes.use('/sessions', SessionRouter);

routes.use(authMiddleware);

routes.use('/users', UserRouter);
routes.use('/recipient', RecipientRouter);

export default routes;
