import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import RentsRepository from '../repositories/RentsRepository';

import CreateRentService from '../services/CreateRentService';
import GetMovieByIdService from '../services/GetMovieByIdService';
import GetRentService from '../services/GetRentService';
import UpdateMovieService from '../services/UpdateMovieService';
import UpdateRentService from '../services/UpdateRentService';

const rentsRouter = Router();

rentsRouter.get('/', ensureAuthenticated, async (request, response) => {
  const { id } = request.user;

  const rentsRepository = getCustomRepository(RentsRepository);

  const rents = await rentsRepository.search(id);
  console.log(rents);

  return response.json(rents);
});

rentsRouter.post('/', ensureAuthenticated, async (request, response) => {
  const { movie_id } = request.body;
  const { id } = request.user;
  const createRent = new CreateRentService();
  const getMovie = new GetMovieByIdService();
  const updateMovie = new UpdateMovieService();

  const movie = await getMovie.execute(movie_id);

  if (!movie) {
    throw new AppError('Movie does not exist');
  }

  if (movie.total_qnt === 0) {
    throw new AppError('Not enough available movies', 400);
  }
  const rent = await createRent.execute({ user_id: id, movie_id });

  await updateMovie.execute(movie_id, true);

  return response.json(rent);
});

rentsRouter.put('/devolution', ensureAuthenticated, async (request, response) => {
  const { rent_id } = request.body;
  // const { id: user_id } = request.user;

  const getRent = new GetRentService();
  const updateRent = new UpdateRentService();
  const updateMovie = new UpdateMovieService();

  const rent = await getRent.execute(rent_id);

  if (!rent) {
    throw new AppError('Invalid rent Id');
  }

  const { movie_id } = rent;
  const updatedRent = await updateRent.execute(rent_id, false);
  console.log(updatedRent);
  await updateMovie.execute(movie_id, false);

  return response.json(updatedRent);
});

export default rentsRouter;
