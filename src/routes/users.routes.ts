import { Router } from 'express';

// import CreateUserService from '../services/CreateUserService';
// import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

// import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  // const createUser = new CreateUserService();

  // const user = await createUser.execute({ name, email, password });

  // const userWithoutPassword = {
  //   id: user.id,
  //   name: user.name,
  //   email: user.email,
  //   created_at: user.created_at,
  //   updated_at: user.updated_at,
  // };

  return response.json({name, email, password});
});

export default usersRouter;
