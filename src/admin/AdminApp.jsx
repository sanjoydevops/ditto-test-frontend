import React from 'react';
import { Provider } from 'react-redux';

import './AdminApp.scss';
import Router from './components/Router';
import store from './store';

const AdminApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default AdminApp;
