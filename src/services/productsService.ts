import productsModel from '../models/productsModel';
import { IProducts } from '../interfaces/IProducts';

const addProducts = async (product: IProducts) => {
  const result = await productsModel.addProducts(product);
  return result;
};

const getAll = async () => {
  const result = await productsModel.getAll();
  return result;
};

export default { addProducts, getAll };