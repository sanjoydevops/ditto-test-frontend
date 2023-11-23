import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="align-items-center d-flex justify-content-center vh-100">
    <Spinner animation="border" />
  </div>
);

export default Loading;
