import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/IUsers';

require('dotenv/config');

const createToken = (user: IUsers) => {
  const token = jwt.sign({ data: user }, 'senhaSecreta', {
    expiresIn: '5h',
    algorithm: 'HS256',
  });

  return token;
};

export default { createToken };