import { getCustomRepository } from 'typeorm';

import Rent from '../models/Rent';
import RentsRepository from '../repositories/RentsRepository';

class UpdateRentService {
  public async execute(id: string, is_rent: boolean): Promise<Rent | undefined> {
    const rentsRepository = getCustomRepository(RentsRepository);

    const rent = await rentsRepository.setDevolution(id, is_rent);

    return rent || undefined;
  }
}

export default UpdateRentService;
