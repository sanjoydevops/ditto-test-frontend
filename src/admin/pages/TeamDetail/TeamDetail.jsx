import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import UsersTable from '../../components/UsersTable';
import { TeamAction } from '../../store/actions';

const TeamDetail = () => {
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const team = useSelector(state => state.detail.team || {});
  useEffect(() => {
    dispatch(TeamAction.viewTeam(teamId));
  }, [dispatch, teamId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Team Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{team.id}</dd> */}
              <dt>Name</dt>
              <dd>{team.name}</dd>
              <dt>Created By</dt>
              <dd>{team.user?.profile?.full_name}</dd>
            </dl>
          </div>
        </div>
      </div>
      {team.users?.length > 0 && (
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Team Users
              </h3>
            </div>
            <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
              <UsersTable users={team.users} actions={['view']} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDetail;
