import {
  EntityRepository, Repository,
} from 'typeorm';
import AppError from '../errors/AppError';

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
    const rent = this.create({
      movie_id,
      user_id,
    });

    await this.save(rent);

    return rent;
  }

  public async setDevolution(rent_id: string, is_rent: boolean): Promise<Rent | null> {
    console.log('here', rent_id);
    const rent = await this.findOne({
      where: {
        id: rent_id,
      },
    });

    if (!rent) {
      throw new AppError('Rent does not exist');
    }

    await this.update(rent_id, { devolution: !is_rent });

    return rent || null;
  }
}

export default RentsRepository;
