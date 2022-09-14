import { IUserLoginBody } from '../interfaces/user.interface';
import LoginModel from '../models/login.model';
import tokenHelper from '../helpers/token';

const LoginService = {
  login: async (user : IUserLoginBody) : Promise<object | string> => {
    const findUser = await LoginModel.validUser(user);
    if (!findUser) {
      return {
        message: 'Username or password invalid',
        status: 401,
      };
    }
    const { password, ...userWithoutPass } = findUser;
    const token = tokenHelper.createToken(userWithoutPass);
    return token;
  }, 
};

export default LoginService;