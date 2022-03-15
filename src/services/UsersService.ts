import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ name, email, password }: User) {
    const userExist = await this.usersRepository.findOne({
      where: { email },
    });
    if (userExist) {
      throw new Error('User already exist');
    }

    const user = this.usersRepository.create({ name, email, password });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };