import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/product.type';
import { product } from '../../services/apiProducts';

interface IInitialState {
  list: IProduct[];
  filtered: IProduct[];
  isLoading: boolean;
  offset: number;
  error: string;
}

const initialStateProduct: IInitialState = {
  list: [],
  filtered: [],
  isLoading: false,
  offset: 5,
  error: '',
};

const sliceProducts = createSlice({
  name: 'products',
  initialState: initialStateProduct,
  reducers: {
    getAllProduct: (state, action: PayloadAction<IProduct[]>) => {
      state.list = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setOffsetProduct: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
});

export const { getAllProduct, setLoading, setError, setOffsetProduct } =
  sliceProducts.actions;

export const getProducts = (offset: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await product.getAll(offset);
    dispatch(getAllProduct(data));
    dispatch(setLoading(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoading(true));
  }
};

export default sliceProducts.reducer;
