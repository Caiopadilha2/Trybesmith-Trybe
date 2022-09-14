import { RowDataPacket } from 'mysql2';
import orderModel from '../models/orders.model';

const OrdersService = {
  getAll: async () : Promise<RowDataPacket[]> => {
    const result = await orderModel.getAll();
    return result;
  },
};

export default OrdersService;