import connection from './connection';
import { IProduct, ProductWithRow } from '../interfaces/product.interface';

const productModel = {
  getAll: async (): Promise<IProduct[]> => {
    const [resul] = await connection.execute<ProductWithRow[]>('SELECT * FROM Trybesmith.Products');
    return resul;
  },
};

export default productModel;
