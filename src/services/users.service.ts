import { IUser } from '../interfaces/user.interface';
import userModel from '../models/users.model';
import createToken from '../helpers/token';

const UserService = {
  create: async (user: IUser) => {
    const result = await userModel.create(user);
    const { password, ...userWithoutPassword } = result;
    const token = createToken.createToken(userWithoutPassword);
    return token;
  },
};

export default UserService;