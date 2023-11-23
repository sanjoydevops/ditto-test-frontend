import React from 'react';
import { Switch } from 'react-router-dom';

import Route from '../Route';
import routes from '../../routes';

const AdminRouter = () => (
  <Switch>
    {routes.map((props, index) => <Route key={index} {...props} />)}
  </Switch>
);

export default AdminRouter;
