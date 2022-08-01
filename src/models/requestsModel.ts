import connection from './connection';
import { IRequests } from '../interfaces/IRequests';
import { IProducts } from '../interfaces/IProducts';

const getAll = async (): Promise<IRequests[]> => {
  const [users] = await connection.execute('SELECT * FROM Trybesmith.Orders');
  const listUsers = users as IRequests[];
  const listRequest = await Promise.all(listUsers.map(async (ele) => {
    const orderId = Number(ele.id);
    const [resultConnection] = await connection
      .execute('SELECT * FROM Trybesmith.Products WHERE orderId = ?', [orderId]);
    const productsKList = resultConnection as unknown as IProducts[];
    const ids = productsKList.map((e) => e.id);
    const { id, userId } = ele;
    const newObj = {
      id,
      userId,
      productsIds: ids,
    }; return newObj;
  })); return listRequest as IRequests[];
};

export default { getAll };