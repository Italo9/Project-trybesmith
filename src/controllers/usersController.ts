import { Request, Response, NextFunction } from 'express';
import usersService from '../services/usersService';
import { IUsers } from '../interfaces/IUsers';

const addUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body as IUsers;
    const result = await usersService.addUsers(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

export default { addUsers };