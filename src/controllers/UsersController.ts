import { Request, Response } from 'express';

import { UsersService } from '../services/UsersService';

interface IUserCreate {
  name: string;
  email: string;
  password: string;
}

class UsersController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body as IUserCreate;

    const usersService = new UsersService();

    const user = await usersService.create({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}

export { UsersController };
