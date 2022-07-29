import { Request, Response, NextFunction } from 'express';
import productsService from '../services/productsService';
import { IProducts } from '../interfaces/IProducts';

const addProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body as IProducts;
    const result = await productsService.addProducts(product);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

const getAll = async (_req: Request, res: Response) => {
  const result = await productsService.getAll();
  res.status(200).json(result);
};

export default { addProducts, getAll };