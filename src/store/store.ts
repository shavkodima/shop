import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi, productsApi } from './api/api';
import sliceProducts from './products/sliceProducts';

export const store = configureStore({
  reducer: {
    products: sliceProducts,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoriesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
