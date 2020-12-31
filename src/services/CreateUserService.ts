import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  nickname: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ nickname, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    if (!nickname || !email || !password) {
      throw new AppError('Insuficient attributes');
    }

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      nickname,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
