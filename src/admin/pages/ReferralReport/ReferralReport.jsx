import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReportAction } from '../../store/actions';

const ReferralReport = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.list.report?.referral || {});
  useEffect(() => dispatch(ReportAction.fetchReferralReport()), [dispatch]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              Referral Report
            </div>
          </div>
          <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
            <table className="table table-bordered table-head-fixed text-nowrap">
              <thead>
                <tr>
                  <th colSpan="4">From</th>
                  <th>To</th>
                </tr>
                <tr>
                  <th>Referred At</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Email / Phone</th>
                </tr>
              </thead>
              <tbody>
                {data?.map?.((d, i) => (
                  <tr key={i}>
                    <td>{d?.created_date} {d?.created_time}</td>
                    <td>{d?.user?.profile?.full_name}</td>
                    <td>{d?.user?.email}</td>
                    <td>{d?.user?.phone}</td>
                    <td>{d?.contact}</td>
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

export default ReferralReport;
