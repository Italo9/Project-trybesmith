import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUsers } from '../interfaces/IUsers';

const addUsers = async (user: IUsers) => {
  const { username, classe, level, password } = user;

  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
  VALUES (?, ?, ?, ?)`;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: IUsers = { id, username, classe, level, password };
  return newUser;
};

export default { addUsers };