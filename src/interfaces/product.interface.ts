import { RowDataPacket } from 'mysql2';

export interface IProduct {
  id: number,
  name: string,
  amount: string,
}

export interface ProductWithRow extends IProduct, RowDataPacket{}

export interface IProductBody {
  name: string,
  amount: string,
}
