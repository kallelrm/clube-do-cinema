import { getRepository } from 'typeorm';

import Rent from '../models/Rent';

interface Request {
  user_id: string;
  movie_id: string;
}

class CreateRentService {
  public async execute({ user_id, movie_id }: Request): Promise<Rent> {
    const usersRepository = getRepository(Rent);

    const rent = usersRepository.create({
      user_id,
      movie_id,
    });

    await usersRepository.save(rent);

    return rent;
  }
}

export default CreateRentService;
