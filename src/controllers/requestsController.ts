import { Request, Response } from 'express';
import requestsService from '../services/requestsService';
// import { IProducts } from '../interfaces/IProducts';

const getAll = async (_req: Request, res: Response) => {
  const result = await requestsService.getAll();
  res.status(200).json(result);
};

export default { getAll };