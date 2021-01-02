import { Router } from 'express';
// import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import MoviesRepository from '../repositories/MoviesRepository';
// import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const moviesRouter = Router();

moviesRouter.use(ensureAuthenticated);

moviesRouter.get('/', ensureAuthenticated, async (request, response) => {
  const moviesRepository = getCustomRepository(MoviesRepository);
  const movies = await moviesRepository.find();

  return response.json(movies);
});

moviesRouter.get('/findByName', ensureAuthenticated, async (request, response) => {
  const { name } = request.query;

  const moviesRepository = getCustomRepository(MoviesRepository);
  const movie = await moviesRepository.findByName(`${name}`);

  return response.json(movie);
});

export default moviesRouter;
