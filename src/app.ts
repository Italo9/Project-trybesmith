import express from 'express';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import requestsController from './controllers/requestsController';

const app = express();
// const router = express.Router();

app.use(express.json());
app.post('/products', productsController.addProducts);
app.get('/products', productsController.getAll);
app.post('/users', usersController.addUsers);
app.get('/orders', requestsController.getAll);
export default app;
