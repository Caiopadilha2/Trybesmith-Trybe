import { Request, Response } from 'express';
import UserService from '../services/users.service';

const UserController = {
  create: async (req: Request, res: Response) => {
    const { body } = req;

    const created = await UserService.create(body);

    return res.status(201).json({ token: created });
  },
};

export default UserController;