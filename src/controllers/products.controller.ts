import { Request, Response } from 'express';
import ProductService from '../services/products.service';

const ProductController = {
  getAll: async (_req: Request, res: Response) => {
    const result = await ProductService.getAll();
    return res.status(200).json(result);
  },
};

export default ProductController;