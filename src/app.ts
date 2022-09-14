import express from 'express';
import ProductController from './controllers/products.controller';
import UserController from './controllers/users.controller';
import OrderController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);
app.post('/products', ProductController.create);
app.post('/users', UserController.create);
app.get('/orders', OrderController.getAll);

export default app;
