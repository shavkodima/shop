import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import SingleCategory from '../SingleCategory/SingleCategory';
import { LINK } from '../../types/Link';

const AppController = () => {
  return (
    <Routes>
      <Route
        path={LINK.HOME}
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path={LINK.SINGLE_CATEGORY}
          element={<SingleCategory />}
        />
      </Route>
    </Routes>
  );
};

export default AppController;
