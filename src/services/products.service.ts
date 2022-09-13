import { IProduct, IProductBody } from '../interfaces/product.interface';
import productModel from '../models/products.model';

const ProductService = {
  getAll: async (): Promise<IProduct[]> => {
    const result = await productModel.getAll();
    return result;
  },

  create: async (product: IProductBody) => {
    const result = await productModel.create(product);
    return result;
  },
};

export default ProductService;