import React, { useState, useEffect } from 'react';

import classes from './Header.module.css';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/user.svg';
import FAWORITE from '../../images/faworite.svg';
import CART from '../../images/cart.svg';
import ICON from '../../images/search-icon.svg';

import { Link } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState({ name: 'Guest', img: AVATAR });
  const [valueSearch, setValueSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValueSearch(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'dima', img: AVATAR });
    }, 1000);
  }, []);

  return (
    <header>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Link to={'/'}>
            <img
              src={LOGO}
              alt="Stuff"
            />
          </Link>
        </div>
        <div className={classes.profile}>
          <Link to={'/profile'}>
            <img
              src={user.img}
              alt=""
            />
            <span>{user.name}</span>
          </Link>
        </div>
        <div className={classes.search}>
          <div className={classes.search_container}>
            <img
              src={ICON}
              alt=""
            />
            <input
              type="search"
              placeholder="Search for anyting..."
              autoComplete="off"
              value={valueSearch}
              className={classes.input_search}
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className={classes.shop}>
          <div>
            <img
              src={FAWORITE}
              alt="faworite"
            />
          </div>
          <div>
            <img
              src={CART}
              alt="CART"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
