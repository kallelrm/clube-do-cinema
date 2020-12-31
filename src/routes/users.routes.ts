import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { nickname, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ nickname, email, password });

  const userWithoutPassword = {
    id: user.id,
    name: user.nickname,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json(userWithoutPassword);
});

export default usersRouter;
