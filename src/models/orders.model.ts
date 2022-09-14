import { RowDataPacket } from 'mysql2';
import connection from './connection';

const orderModel = {
  getAll: async () : Promise<RowDataPacket[]> => {
    const query = `SELECT
    o.id,
    o.userId,
    JSON_ARRAYAGG(p.id) as productsIds
  FROM
    Trybesmith.Orders o
  JOIN 
    Trybesmith.Products p 
  ON
    p.orderId = o.id
  GROUP BY
    o.id
  ORDER BY
    o.userId`;
    // https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html
    const [result] = await connection.execute<RowDataPacket[]>(query);
    return result;
  },
};

export default orderModel;