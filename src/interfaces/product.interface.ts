import { RowDataPacket } from 'mysql2';

export interface IProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number
}

export interface ProductWithRow extends IProduct, RowDataPacket{}
