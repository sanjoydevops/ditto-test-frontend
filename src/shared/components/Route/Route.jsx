import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route as BaseRoute, useHistory } from 'react-router-dom';

function Route({ component: Component, layout = true, type, ...routeProps }) {
  const history = useHistory();
  const authUser = useSelector(state => ({ ...state.auth.user }));
  const Layout = Route.Layout;
  const render = (componentProps) => {
    if (type === 'auth' && !authUser.is_logged_in) {
      return <Redirect push to={{ pathname: Route.redirectGuestTo, state: { prevPath: history.location.pathname } }} />;
    }
    if (type === 'guest' && authUser.is_logged_in) {
      return <Redirect to={history.location.state?.prevPath || Route.redirectAuthTo} />;
    }
    return <Layout empty={!layout}><Component {...componentProps} /></Layout>;
  };
  return <BaseRoute {...routeProps} render={render} />;
}

export default Route;
