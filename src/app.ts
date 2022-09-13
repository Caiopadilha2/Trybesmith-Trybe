import express from 'express';
import ProductController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', ProductController.getAll);
app.post('/products', ProductController.create);

export default app;
