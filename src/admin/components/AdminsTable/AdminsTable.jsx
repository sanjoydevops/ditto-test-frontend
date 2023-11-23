import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AdminAction } from '../../store/actions';

const AdminsTable = ({ admins }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = admin => {
    if (window.confirm(`Do you want to remove "${admin?.name}"?`)) {
      dispatch(AdminAction.removeAdmin(admin?.id));
    }
  };
  const onToggleAccess = admin => {
    if (window.confirm(`Do you want to ${admin?.access ? 'deactivate' : 'activate'} "${admin?.name}"?`)) {
      dispatch(AdminAction.toggleAccessAdmin(admin?.id, {
        access: !admin?.access
      }));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        {admins?.map?.((admin, i) => (
          <tr key={i}>
            <td>
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('admin.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/admin-detail/${admin?.id}`}>
                    View
                  </Link>
                )}
                {authPermissions.some(p => ['admin.remove', 'admin.toggle-access'].includes(p)) && (
                  <Fragment>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      {authPermissions.includes('admin.edit') && (
                        <Link className="bg-info dropdown-item" to={`/admin/edit-admin/${admin?.id}`}>
                          Edit
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('admin.remove') && (
                        <Dropdown.Item className="bg-danger" onClick={() => onRemove(admin)}>
                          Remove
                        </Dropdown.Item>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('admin.toggle-access') && (
                        <Dropdown.Item className="bg-warning" onClick={() => onToggleAccess(admin)}>
                          {admin?.access ? 'Deactivate' : 'Activate' }
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Fragment>
                )}
              </Dropdown>
            </td>
            {/* <td>{admin?.id}</td> */}
            <td>{admin?.name}</td>
            <td>{admin?.email}</td>
            <td>
              <span className={classNames({ 'bg-warning': !admin?.access })}>
                {admin?.access ? 'Active' : 'Inactive'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminsTable;
