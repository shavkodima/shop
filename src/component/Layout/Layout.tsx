import React, { FC } from 'react';

import classes from './Layout.module.css';

import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/SideBar';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <SideBar />
        {<Outlet />}
      </main>
      <div>footer</div>
    </div>
  );
};

export default Layout;
