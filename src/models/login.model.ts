import { RowDataPacket } from 'mysql2';
import { IUser, IUserLoginBody } from '../interfaces/user.interface';
import connection from './connection';

const LoginModel = {
  validUser: async (user: IUserLoginBody) : Promise<IUser> => {
    const query = `SELECT *
     FROM Trybesmith.Users
     WHERE username = ? AND password = ?`;
    const [result] = await connection
      .execute<RowDataPacket[]>(query, [user.username, user.password]);
    return result[0] as IUser;
  },
};

export default LoginModel;