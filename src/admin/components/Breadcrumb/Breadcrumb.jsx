import React from 'react';

const Breadcrumb = () => (
  <div className="content-header">
    <div className="container-fluid d-none">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Admin</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="/">Admin</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default Breadcrumb;
