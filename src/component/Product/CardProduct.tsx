import React, { FC } from 'react';
import { IProduct } from '../../types/product.type';
import classes from './product.module.css';
import { NavLink } from 'react-router-dom';

const CardProduct: FC<{ product: IProduct }> = ({ product }) => {
  const image = {
    backgroundImage: `url(${product.images[0]})`,
    backgroundSize: '100%',
    backgroundPosition: 'center center',
  };

  return (
    <div className={classes.card}>
      <NavLink to={`/products/${product.id}`}>
        <div
          className={classes.image__container}
          style={image}
        ></div>
        <div className={classes.card__content}>
          <div className={classes.card__title}>
            <p className={classes.title}>{product.title}</p>
            <p className={classes.name__category}>{product.category.name}</p>
          </div>
          <div className={classes.info}>
            <div className={classes.price}>
              <p className={classes.new__price}>{product.price}$</p>
              <p className={classes.old__price}>
                {Math.floor(product.price * 1.2)}$
              </p>
            </div>
            <div className={classes.view}>
              <p>{Math.round(Math.random() * 10)} people purchased</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CardProduct;
