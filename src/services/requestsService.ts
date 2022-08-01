import requestsModel from '../models/requestsModel';
// import { IProducts } from '../interfaces/IProducts';

const getAll = async () => {
  const result = await requestsModel.getAll();
  return result;
};

export default { getAll };