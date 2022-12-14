import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProducts } from '../interfaces/IProducts';

const addProducts = async (product: IProducts) => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProducts = { id, name, amount };
  return newProduct;
};

const getAll = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [users] = await connection.execute(query);

  return users as IProducts[];
};

export default { addProducts, getAll };