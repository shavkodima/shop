import { useSelector } from 'react-redux';
import { IProduct } from '../../types/product.type';
import Poster from '../Poster/Poster';
import Product from '../Product/Product';

import classes from './Home.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { useEffect, useMemo } from 'react';
import {
  getAllProduct,
  getProducts,
  setOffsetProduct,
} from '../../store/products/sliceProducts';

const Home = () => {
  const { list, offset } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts(5));

    return () => {
      dispatch(getAllProduct([]));
      dispatch(setOffsetProduct(5));
    };
  }, []);

  return (
    <>
      <Poster />
      <Product
        products={list}
        amount={offset}
        title="Trending"
      />
    </>
  );
};

export default Home;
