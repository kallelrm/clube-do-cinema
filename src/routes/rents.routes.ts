import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import RentsRepository from '../repositories/RentsRepository';

const rentsRouter = Router();

rentsRouter.get('/', ensureAuthenticated, async (request, response) => {
  const { id } = request.user;
  // console.log('linha 11', id);
  const rentsRepository = getCustomRepository(RentsRepository);

  const rents = await rentsRepository.search(id);
  console.log(rents);

  return response.json({});
});

export default rentsRouter;
