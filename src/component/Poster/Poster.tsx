import React from 'react';
import classes from './poster.module.css';
import BG from '../../images/computer.png';
const Poster = () => {
  return (
    <section className={classes.poster}>
      <h1 className={classes.title}>BIG SALE 20%</h1>
      <div className={classes.container}>
        <div className={classes.detail}>
          <p className={classes.p1}>the bestseller of 2022 </p>
          <p className={classes.p2}>LENNON r2d2 with NVIDIA 5090 TI </p>
          <button className={'btn'}>Shop Now</button>
        </div>
        <div className={classes.images}>
          <img
            src={BG}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Poster;
