import {
  EntityRepository, Repository, MoreThan,
} from 'typeorm';
import AppError from '../errors/AppError';

import Movie from '../models/Movie';

@EntityRepository(Movie)
class MoviesRepository extends Repository<Movie> {
  public async search(): Promise<Movie[] | null> {
    const findMovie = await this.find();
    return findMovie || null;
  }

  public async findAvailable(): Promise<Movie[] | null> {
    const availableMovies = await this.find({
      where: {
        total_qnt: MoreThan(0),
      },
    });

    return availableMovies || null;
  }

  public async findByName(movieName: string): Promise<Movie | null> {
    console.log(movieName);

    const movie = await this.findOne({
      where: {
        name: movieName,
      },
    });

    return movie || null;
  }

  public async updateTotalQnt(id: string, is_rent: boolean): Promise<Movie> {
    const movie = await this.findOne({
      where: {
        id,
      },
    });

    if (!movie) {
      throw new AppError('Movie does not exist', 402);
    }

    if (is_rent) {
      movie.total_qnt -= 1;
    } else {
      movie.total_qnt += 1;
    }

    await this.update(id, { total_qnt: movie.total_qnt });

    return movie;
  }
}

export default MoviesRepository;
