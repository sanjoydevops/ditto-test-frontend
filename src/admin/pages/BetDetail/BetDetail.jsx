import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BetSettleDispute from '../../components/BetSettleDispute';
import UsersTable from '../../components/UsersTable';
import { BetAction } from '../../store/actions';

const BetDetail = () => {
  const dispatch = useDispatch();
  const { betId } = useParams();
  const bet = useSelector(state => state.detail.bet || {});
  useEffect(() => {
    dispatch(BetAction.viewBet(betId));
  }, [dispatch, betId]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              Bet Detail
            </h3>
          </div>
          <div className="card-body">
            <dl className="mb-0">
              {/* <dt>ID</dt>
              <dd>{bet.id}</dd> */}
              <dt>Description</dt>
              <dd>{bet.description}</dd>
              <dt>Created By</dt>
              <dd>{bet.user?.profile?.full_name}</dd>
              <dt>Created At</dt>
              <dd>{bet.created_date} {bet.created_time}</dd>
              <dt>Cancelled At</dt>
              <dd>{bet.cancelled_date} {bet.cancelled_time}</dd>
              <dt>Expired At</dt>
              <dd>{bet.expired_date} {bet.expired_time}</dd>
              <dt>Disputed At</dt>
              <dd>{bet.disputed_date} {bet.disputed_time}</dd>
              {bet.is_disputed === 1 && (<>
                <dt>Disputed Since</dt>
                <dd>{bet.disputed_since}</dd>
              </>)}
              <dt>Has Dispute</dt>
              <dd>
                <span className={classNames({ 'bg-danger': bet.is_disputed })}>
                  {bet.is_disputed ? 'Yes' : 'No'}
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {bet.users?.length > 0 && (
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                Bet Users
              </h3>
            </div>
            <div className="card-body table-responsive p-0" style={{ maxHeight: '500px' }}>
              <UsersTable users={bet.users} actions={['view']} userHasBet />
            </div>
          </div>
        </div>
      )}
      {bet.is_disputed === 1 && (
        <div className="col-12">
          <BetSettleDispute bet={bet} />
        </div>
      )}
    </div>
  );
};

export default BetDetail;
