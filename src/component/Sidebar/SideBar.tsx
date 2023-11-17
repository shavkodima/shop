import React, { FC } from 'react';

import classes from './sidebar.module.css';
import { useGetAllCategoriesQuery } from '../../store/api/api';
import { NavLink } from 'react-router-dom';

const SideBar: FC = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <aside className={classes.sidebar}>
      <div className={classes.title}>
        <p>CATEGORIES</p>
      </div>
      <div className={classes.nav}>
        {data?.map((cat) => {
          return (
            <div
              className={classes.item_nav}
              key={cat.id}
            >
              <NavLink
                to={`categories/${cat.id}`}
                key={cat.id}
              >
                {cat.name}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className={classes.sidebar_item}>
        <NavLink to={'/help'}>Help</NavLink>
        <NavLink
          to={'/term'}
          className={classes.underline}
        >
          Terms & Conditions
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
