import express from 'express';
import productsController from './controllers/productsController';

const app = express();
// const router = express.Router();

app.use(express.json());
app.post('/products', productsController.addProducts);
app.get('/products', productsController.getAll);
export default app;
