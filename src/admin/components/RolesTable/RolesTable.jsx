import React, { Fragment } from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RoleAction } from '../../store/actions';

const RolesTable = ({ roles }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onRemove = role => {
    if (window.confirm(`Do you want to remove "${role?.description}"?`)) {
      dispatch(RoleAction.removeRole(role?.id));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {roles?.map?.((role, i) => (
          <tr key={i}>
            <td className="p-2">
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('role.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/role-detail/${role?.id}`}>
                    View
                  </Link>
                )}
                {authPermissions.some(p => ['role.remove'].includes(p)) && (
                  <Fragment>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2">
                      {authPermissions.includes('role.edit') && (
                        <Link className="bg-info dropdown-item" to={`/admin/edit-role/${role?.id}`}>
                          Edit
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {authPermissions.includes('role.remove') && (
                        <Dropdown.Item className="bg-danger" onClick={() => onRemove(role)}>
                          Remove
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Fragment>
                )}
              </Dropdown>
            </td>
            {/* <td>{role?.id}</td> */}
            <td>{role?.title}</td>
            <td>{role?.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RolesTable;
