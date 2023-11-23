import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Loading from './shared/components/Loading';
import history from './shared/history';

const AdminApp = lazy(() => import('./admin'));
const BettorApp = lazy(() => import('./bettor'));

const App = () => (
  <Router history={history}>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/admin" component={AdminApp} />
        <Route path="/" component={BettorApp} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
