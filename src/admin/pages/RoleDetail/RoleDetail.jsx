import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RoleAction } from '../../store/actions';

const RoleDetail = () => {
  const dispatch = useDispatch();
  const { roleId } = useParams();
  const role = useSelector(state => state.detail.role || {});
  useEffect(() => {
    dispatch(RoleAction.viewRole(roleId));
  }, [dispatch, roleId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Role Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{role.id}</dd> */}
              <dt>Name</dt>
              <dd>{role.title}</dd>
              <dt>Description</dt>
              <dd>{role.description}</dd>
            </dl>
          </div>
        </div>
      </div>
      {role.permissions?.length > 0 && (
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Role Permissions
              </h3>
            </div>
            <div className="card-body table-responsive">
              {role.permissions?.map((permission, i) => (
                <span className="badge badge-secondary mr-2" key={i}>
                  {permission.description}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleDetail;
