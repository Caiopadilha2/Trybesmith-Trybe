import { IUser } from '../interfaces/user.interface';
import userModel from '../models/users.model';
import createToken from '../helpers/token';

const UserService = {
  create: async (user: IUser) => {
    const result = await userModel.create(user);
    const token = createToken.createToken(result);
    return token;
  },
};

export default UserService;