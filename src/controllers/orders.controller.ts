import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

const OrderController = {
  getAll: async (req: Request, res: Response) => {
    const result = await OrdersService.getAll();
    return res.status(200).json(result);
  },
};

export default OrderController;