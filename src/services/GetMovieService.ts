import { getCustomRepository } from 'typeorm';

import Movie from '../models/Movie';
import MoviesRepository from '../repositories/MoviesRepository';

class GetMovieService {
  public async execute(name: string): Promise<Movie | null> {
    const moviesRepository = getCustomRepository(MoviesRepository);

    const movie = await moviesRepository.findByName(`${name}`);

    return movie || null;
  }
}

export default GetMovieService;
