import React from 'react';
import { Provider } from 'react-redux';

import './BettorApp.scss';
import Router from './components/Router';
import store from './store';

const BettorApp = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default BettorApp;
