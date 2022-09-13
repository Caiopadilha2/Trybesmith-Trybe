import express from 'express';
import ProductController from './controllers/products.controller';
import UserController from './controllers/users.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);
app.post('/products', ProductController.create);
app.post('/users', UserController.create);

export default app;
