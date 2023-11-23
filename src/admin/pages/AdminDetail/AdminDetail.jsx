import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AdminAction } from '../../store/actions';

const AdminDetail = () => {
  const dispatch = useDispatch();
  const { adminId } = useParams();
  const admin = useSelector(state => state.detail.admin || {});
  useEffect(() => {
    dispatch(AdminAction.viewAdmin(adminId));
  }, [dispatch, adminId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Admin Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              <dt>ID</dt>
              <dd>{admin.id}</dd>
              <dt>Full Name</dt>
              <dd>{admin.name}</dd>
              <dt>Email</dt>
              <dd>{admin.email}</dd>
              <dt>Access</dt>
              <dd>
                <span className={classNames({ 'bg-warning': !admin.access })}>
                  {admin.access ? 'Active' : 'Inactive'}
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {admin.roles?.length > 0 && (
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Admin Roles
              </h3>
            </div>
            <div className="card-body table-responsive">
              {admin.roles?.map((role, i) => (
                <span className="badge badge-secondary mr-2" key={i}>
                  {role.description}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDetail;
