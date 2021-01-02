import { getRepository } from 'typeorm';

import Rent from '../models/Rent';

class GetRentService {
  public async execute(rent_id: string): Promise<Rent | null> {
    const rentRepository = getRepository(Rent);

    const rent = await rentRepository.findOne({
      where: {
        id: rent_id,
      },
    });

    return rent || null;
  }
}

export default GetRentService;
