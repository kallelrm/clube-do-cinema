import { Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.get('/', async (request, response) => {
  return response.json({});
});

export default sessionsRouter;
