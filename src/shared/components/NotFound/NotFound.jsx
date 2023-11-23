import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="align-items-center d-flex error-page justify-content-center vh-100 vw-100">
    <h2 className="display-1 headline text-warning">404</h2>
    <div className="error-content ml-3">
      <h3 className="mb-3">
        <i className="fas fa-exclamation-triangle text-warning"></i>
        Oops! Page not found.
      </h3>
      <p>We could not find the page you were looking for.</p>
      <p>
        Meanwhile, you may return to
        <Link to={NotFound.path}> {NotFound.label}</Link>.
      </p>
    </div>
  </div>
);

export default NotFound;
