import React, { Fragment } from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserAction } from '../../store/actions';

const UsersTable = ({ users, actions = true, userHasBet }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const onToggleAccess = user => {
    if (window.confirm(`Do you want to ${user?.access ? 'deactivate' : 'activate'} "${user?.profile?.full_name}"?`)) {
      dispatch(UserAction.toggleAccessUser(user?.id, {
        access: !user?.access
      }));
    }
  };
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          {actions && (
            <th>Action</th>
          )}
          {/* <th>ID</th> */}
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Access</th>
          {userHasBet && (<>
            <th>Invited At</th>
            <th>Accepted At</th>
            <th>Declined At</th>
            <th>Completed At</th>
            <th>Result</th>
          </>)}
        </tr>
      </thead>
      <tbody>
        {users?.map?.((user, i) => (
          <tr key={i}>
            {actions && (
              <td>
                <Dropdown as={ButtonGroup}>
                  {authPermissions.includes('user.view')
                    && (actions === true || actions?.includes?.('view'))
                    && (
                      <Link className="btn btn-primary btn-sm" to={`/admin/user-detail/${user?.id}`}>
                        View
                      </Link>
                    )}
                  {authPermissions.some(p => ['user.toggle-access'].includes(p))
                    && (actions === true || actions?.some?.(p => ['toggle-access'].includes(p)))
                    && (
                      <Fragment>
                        <Dropdown.Toggle size="sm" variant="secondary">
                          More
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="p-2">
                          {authPermissions.includes('user.toggle-access')
                            && (actions === true || actions?.includes?.('toggle-access'))
                            && (
                              <Dropdown.Item className="bg-warning" onClick={() => onToggleAccess(user)}>
                                {user?.access ? 'Deactivate' : 'Activate' }
                              </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                      </Fragment>
                    )}
                </Dropdown>
              </td>
            )}
            {/* <td>{user?.id}</td> */}
            <td>{user?.profile?.full_name}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>
              <span className={classNames({ 'bg-warning': !user?.access })}>
                {user?.access ? 'Active' : 'Inactive'}
              </span>
            </td>
            {userHasBet && (<>
              <td>{user?.user_has_bet?.invited_at}</td>
              <td>{user?.user_has_bet?.accepted_at}</td>
              <td>{user?.user_has_bet?.declined_at}</td>
              <td>{user?.user_has_bet?.completed_at}</td>
              <td>{user?.user_has_bet?.result_text}</td>
            </>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
