import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReportAction } from '../../store/actions';

const JoinedUserReport = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.report?.joinedUser || {});
  useEffect(() => dispatch(ReportAction.fetchJoinedUserReport()), [dispatch]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              Joined User Report
            </div>
          </div>
          <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th>Joined At</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {data?.map?.((d, i) => (
                  <tr key={i}>
                    <td>{d?.created_date} {d?.created_time}</td>
                    <td>{d?.profile?.full_name}</td>
                    <td>{d?.email}</td>
                    <td>{d?.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedUserReport;
