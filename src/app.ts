import express from 'express';
import ProductController from './controllers/products.controller';
import UserController from './controllers/users.controller';
import OrderController from './controllers/orders.controller';
import userBody from './middlewares/validationsUser';
import LoginController from './controllers/login.controller';
import validateProductName from './middlewares/validateProductName';
import validateProductAmount from './middlewares/validateProductAmount';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);
app.post('/products', validateProductName, validateProductAmount, ProductController.create);
app.post('/users', UserController.create);
app.get('/orders', OrderController.getAll);
app.post('/login', userBody, LoginController.login);

export default app;
