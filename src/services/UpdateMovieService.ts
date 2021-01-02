import { getCustomRepository } from 'typeorm';

import Movie from '../models/Movie';
import MoviesRepository from '../repositories/MoviesRepository';

class UpdateMovieService {
  public async execute(id: string, rent: boolean): Promise<Movie | null> {
    const moviesRepository = getCustomRepository(MoviesRepository);

    const movie = await moviesRepository.updateTotalQnt(id, rent);

    return movie || null;
  }
}

export default UpdateMovieService;
