import React from 'react';
import classNames from 'classnames';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BetsTable = ({ bets }) => {
  const authPermissions = useSelector(state => state.auth.permissions);
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Description</th>
          <th>Created By</th>
          <th>Created At</th>
          <th>Cancelled At</th>
          <th>Expired At</th>
          <th>Disputed At</th>
          <th>Disputed Since</th>
          <th>Has Dispute</th>
        </tr>
      </thead>
      <tbody>
        {bets?.map?.((bet, i) => (
          <tr key={i}>
            <td>
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('bet.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/bet-detail/${bet?.id}`}>
                    View
                  </Link>
                )}
              </Dropdown>
            </td>
            {/* <td>{bet?.id}</td> */}
            <td>{bet?.excerpt}</td>
            <td>{bet?.user?.profile?.full_name}</td>
            <td>{bet?.created_date} {bet?.created_time}</td>
            <td>{bet?.cancelled_date} {bet?.cancelled_time}</td>
            <td>{bet?.expired_date} {bet?.expired_time}</td>
            <td>{bet?.disputed_date} {bet?.disputed_time}</td>
            <td>{bet?.is_disputed === 1 && bet?.disputed_since}</td>
            <td>
              <span className={classNames({ 'bg-danger': bet?.is_disputed })}>
                {bet?.is_disputed ? 'Yes' : 'No'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BetsTable;
