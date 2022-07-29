import express from 'express';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';

const app = express();
// const router = express.Router();

app.use(express.json());
app.post('/products', productsController.addProducts);
app.get('/products', productsController.getAll);
app.post('/users', usersController.addUsers);
export default app;
