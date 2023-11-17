import React from 'react';
import '../../App.css';

import { Provider } from 'react-redux';
import { store } from '../../store/store';

import AppController from '../AppController/AppController';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppController />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
