import React from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TeamsTable = ({ teams }) => {
  const authPermissions = useSelector(state => state.auth.permissions);
  return (
    <table className="table table-head-fixed text-nowrap">
      <thead>
        <tr>
          <th>Action</th>
          {/* <th>ID</th> */}
          <th>Name</th>
          <th>Created By</th>
        </tr>
      </thead>
      <tbody>
        {teams?.map?.((team, i) => (
          <tr key={i}>
            <td>
              <Dropdown as={ButtonGroup}>
                {authPermissions.includes('team.view') && (
                  <Link className="btn btn-primary btn-sm" to={`/admin/team-detail/${team?.id}`}>
                    View
                  </Link>
                )}
              </Dropdown>
            </td>
            {/* <td>{team?.id}</td> */}
            <td>{team?.name}</td>
            <td>{team?.user?.profile?.full_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamsTable;
