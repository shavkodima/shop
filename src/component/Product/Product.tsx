import React, { FC, useEffect, useState } from 'react';
import { IProduct } from '../../types/product.type';

import classes from './product.module.css';
import CardProduct from './CardProduct';
import {
  getProducts,
  setOffsetProduct,
} from '../../store/products/sliceProducts';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';

interface IPropsProduct {
  products: IProduct[] | [];
  amount: number;
  title: string;
}

const Product: FC<IPropsProduct> = ({ products, amount, title }) => {
  const { isLoading } = useAppSelector((state) => state.products);
  const [items, setItems] = useState<IProduct[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setItems((prev) => [...prev, ...products]);
  }, [products]);

  return (
    <section>
      <div className={classes.title}>
        <h2>{title}</h2>
      </div>
      <div className={classes.container}>
        {items.map((product) => (
          <CardProduct
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <div className={classes.button__section}>
        <button
          className="btn"
          onClick={() => {
            dispatch(setOffsetProduct(amount + 5));
            dispatch(getProducts(amount + 5));
          }}
        >
          {isLoading ? 'Loading' : 'Seet more'}
        </button>
      </div>
    </section>
  );
};

export default Product;
