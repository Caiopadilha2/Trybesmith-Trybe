import { Request, Response } from 'express';
import { IProduct, IProductBody } from '../interfaces/product.interface';
import ProductService from '../services/products.service';

const ProductController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductService.getAll();
    return res.status(200).json(result);
  },

  create: async (req: Request<unknown, unknown, IProductBody>, res: Response<IProduct>) => {
    const { body } = req;

    const product = await ProductService.create(body);

    return res.status(201).json(product);
  },
};

export default ProductController;