import {
  EntityRepository, Repository,
} from 'typeorm';

import Rent from '../models/Rent';

@EntityRepository(Rent)
class RentsRepository extends Repository<Rent> {
  public async search(user: string): Promise<Rent[] | null> {
    const findRent = await this.find({
      where: {
        user_id: user,
      },
    });
    return findRent || null;
  }

  public async createRent(user_id: string, movie_id: string): Promise<Rent | Error> {
    const rent = await this.create({
      movie_id,
      user_id,
    });

    await this.save(rent);

    return rent;
  }
}

export default RentsRepository;
