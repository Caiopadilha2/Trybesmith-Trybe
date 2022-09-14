import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const LoginController = {
  login: async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const result = await LoginService.login({ username, password });
    if (typeof result !== 'string') {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    return res.status(200).json({ token: result });
  },
};

export default LoginController;
