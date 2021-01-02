import {
  EntityRepository, Repository, MoreThan,
} from 'typeorm';

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
}

export default MoviesRepository;
