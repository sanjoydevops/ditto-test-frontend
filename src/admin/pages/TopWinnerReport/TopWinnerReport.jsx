import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReportAction } from '../../store/actions';

const TopWinnerReport = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.report?.topWinner || {});
  useEffect(() => dispatch(ReportAction.fetchTopWinnerReport()), [dispatch]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              Top Winner Report
            </div>
          </div>
          <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
            <table className="table table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Won Bets</th>
                </tr>
              </thead>
              <tbody>
                {data?.map?.((d, i) => (
                  <tr key={i}>
                    <td>{d?.date}</td>
                    <td>{d?.full_name}</td>
                    <td>{d?.email}</td>
                    <td>{d?.phone}</td>
                    <td>{d?.won_bets}</td>
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

export default TopWinnerReport;
