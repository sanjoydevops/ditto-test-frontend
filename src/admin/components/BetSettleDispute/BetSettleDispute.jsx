import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BetAction } from '../../store/actions';
import isObjectEmpty from '../../../utils/isObjectEmpty';

const BetSettleDispute = ({ bet }) => {
  const dispatch = useDispatch();
  const authPermissions = useSelector(state => state.auth.permissions);
  const [settleDisputePayload, setSettleDisputePayload] = useState({});
  const onSettleDispute = event => {
    event.preventDefault();
    if (!window.confirm(`Do you want to settle dispute for "${bet?.excerpt}"?`)) {
      return;
    }
    if (isObjectEmpty(settleDisputePayload)) {
      alert('Please select winner / non-winner.');
      return;
    }
    if (Object.keys(settleDisputePayload).length < bet?.users?.reduce((count, user) => user?.user_has_bet?.accepted_at ? (count += 1) : count, 0)) {
      alert('Please select all winner / non-winner.');
      return;
    }
    const payload = { ...settleDisputePayload };
    const result = payload?.[bet?.user?.id];
    delete payload?.[bet?.user?.id];
    const results = Object.values(payload);
    if (results.includes(result)) {
      alert('Please select correct winner / non-winner.');
      return;
    }
    dispatch(BetAction.settleDisputeBet(bet?.id, { results: settleDisputePayload }));
  };
  return authPermissions?.includes?.('bet.settle-dispute') && bet?.is_disputed === 1 && (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Settle Bet Dispute
            </h3>
          </div>
          <form onSubmit={onSettleDispute}>
            <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Result</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {bet?.users?.map?.((user, i) => user?.user_has_bet?.accepted_at && (
                    <tr key={i}>
                      <td>{user?.profile?.full_name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.user_has_bet?.result_text}</td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id={`result-${user?.id}-1`}
                            name={`result-${user?.id}`}
                            onChange={() => setSettleDisputePayload(value => ({ ...value, [user?.id]: 1 }))}
                            type="radio"
                            value="1"
                          />
                          <label className="form-check-label" htmlFor={`result-${user?.id}-1`}>
                            Winner
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id={`result-${user?.id}-0`}
                            name={`result-${user?.id}`}
                            onChange={() => setSettleDisputePayload(value => ({ ...value, [user?.id]: 0 }))}
                            type="radio"
                            value="0"
                          />
                          <label className="form-check-label" htmlFor={`result-${user?.id}-0`}>
                            Non-Winner
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer text-right">
              <button className="btn btn-danger" type="submit">Settle Bet Dispute</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BetSettleDispute;
