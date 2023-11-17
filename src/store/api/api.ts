import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/const';
import { IProduct } from '../../types/product.type';
import { ICategoriesLink } from '../../types/categories.type';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['GET'],
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], number | void>({
      query: (page) => `products?offset=${page}&limit=10`,
    }),
  }),
});

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['GET'],
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategoriesLink[], null | void>({
      query: () => 'categories',
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
export const { useGetAllCategoriesQuery } = categoriesApi;
