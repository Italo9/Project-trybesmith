import userModel from '../models/userModel';
import { IUsers } from '../interfaces/IUsers';
import jwtService from './jwtService';

const addUsers = async (user: IUsers) => {
  const result = await userModel.addUsers(user);
  const tokenJwt = jwtService.createToken(user);
  return result.id && { token: tokenJwt };
};

export default { addUsers };