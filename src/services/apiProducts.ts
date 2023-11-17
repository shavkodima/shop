import { IProduct } from '../types/product.type';
import { axiosBase } from './apiBaseProduct';

export const product = {
  getAll: (offset: number) => {
    const response = axiosBase().get<IProduct[]>(
      `/products?title=&offset=${offset}&limit=5`
    );
    return response;
  },
};
