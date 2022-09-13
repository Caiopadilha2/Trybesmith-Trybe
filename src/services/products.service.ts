import { IProduct } from '../interfaces/product.interface';
import productModel from '../models/products.model';

const ProductService = {
  getAll: async (): Promise<IProduct[]> => {
    const result = await productModel.getAll();
    return result;
  },
};

export default ProductService;