import { getCustomRepository } from 'typeorm';

import Movie from '../models/Movie';
import MoviesRepository from '../repositories/MoviesRepository';

class GetMovieByIdService {
  public async execute(id: string): Promise<Movie | null> {
    const moviesRepository = getCustomRepository(MoviesRepository);

    const movie = await moviesRepository.findOne({
      where: {
        id,
      },
    });

    return movie || null;
  }
}

export default GetMovieByIdService;
