import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/user.interface';
import connection from './connection';

const userModel = {
  create: async (user: IUser) => {
    const query = `INSERT INTO 
    Trybesmith.Users 
    (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const [result] = await connection.execute<ResultSetHeader>(
      query,
      [user.username,
        user.classe,
        user.level,
        user.password],
    );
    return {
      id: result.insertId,
      ...user,
    };
  },
};

export default userModel;