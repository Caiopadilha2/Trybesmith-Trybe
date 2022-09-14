import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProductBody, IProduct, ProductWithRow } from '../interfaces/product.interface';

const productModel = {
  getAll: async (): Promise<IProduct[]> => {
    const [result] = await connection
      .execute<ProductWithRow[]>('SELECT * FROM Trybesmith.Products');
    return result;
  },
  
  create: async (product: IProductBody): Promise<IProduct> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await connection
      .execute<ResultSetHeader>(query, [product.name, product.amount]);
    return {
      id: result.insertId,
      ...product,
    };
  },
};

export default productModel;
